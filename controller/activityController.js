const Activity = require("../database/model/activity")
const User = require("../database/model/user");
 
 
 
exports.addActivity = async (req, res, next) => {
  try {
    // Clean input data
    const cleanedData = cleanActivityData(req.body);
    const { activityType } = cleanedData;
 
    // Validate the activityType field
    if (!activityType) {
      return res.status(400).json({ message: "Activity type is required" });
    }
 
    // Define descriptions for each activity type
    const descriptions = {
      Mail: "Email sent",
      Meeting: "Meeting scheduled",
      Task: "Task assigned",
      Note: "Note added",
    };
 
    // Add the description dynamically based on activityType
    const description = descriptions[activityType] || "Activity recorded";
 
    // Extract user ID from the token
    const userId = req.user.id;
 
    // Fetch the user who is adding the activity
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
 
    // Combine cleaned data with activityType, description, and addedBy info
    const activityData = {
      ...cleanedData,
      activityType,
      description,
      userName: user.userName,  // Track who added the activity
      userRole: user.role,  // Optionally track user role
    };
 
    // Create and save the activity using the helper function
    const savedActivity = await createNewActivity(activityData);
 
    // Respond with success and the saved activity
    res.status(201).json({
      message: "Activity added successfully",
      savedActivity,
    });
 
    ActivityLog(req, "Successfully ", savedActivity._id);
    next(); // Pass control to the next middleware if any
  } catch (error) {
    console.error("Error adding activity:", error);
 
    ActivityLog(req, "Failed to add activity");
    next();
 
    res.status(500).json({ message: "Internal server error" });
  }
};
 
 
 
// Get Single Activity by ID
exports.getActivity = async (req, res) => {
    try {
      const { id } = req.params; // Extract activity ID from request parameters
 
      // Find the activity by ID
      const activity = await Activity.findById(id);
 
      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with the found activity
      res.status(200).json({
        message: "Activity retrieved successfully",
        activity,
      });
    } catch (error) {
      console.error("Error retrieving activity:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
  exports.getAllActivities = async (req, res) => {
    try {
      const { activityType } = req.query; // Optional query parameter for filtering by activity type
      const { leadId } = req.params; // Extract leadId from request parameters
 
      // Validate leadId
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required" });
      }
 
      // Build query based on leadId and optional activityType
      const query = {
        leadId, // Filter activities for the specific leadId
        ...(activityType && { activityType }), // Optionally filter by activityType
      };
 
      // Find all activities matching the query
      const activities = await Activity.find(query);
 
      // Check if any activities exist
      if (!activities.length) {
        return res.status(404).json({ message: "No activities found for the specified lead" });
      }
 
      // Respond with all matching activities
      res.status(200).json({
        message: "Activities retrieved successfully",
        activities,
      });
    } catch (error) {
      console.error("Error retrieving activities:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
  exports.editActivity = async (req, res, next) => {
    try {
      const { id: activityId } = req.params; // Extract activity ID from request parameters
      const { activityType, meetingStatus, taskStatus, ...rawActivityData } = req.body; // Extract activityType and other data
 
      // Validate the activity ID
      if (!activityId) {
        return res.status(400).json({ message: "Activity ID is required" });
      }
 
      // Clean the incoming activity data
      const cleanedData = cleanActivityData(rawActivityData);
 
      // Extract user ID from the token
      const userId = req.user.id;
 
      // Fetch the user performing the edit operation
      const user = await User.findById(userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
 
      // Initialize description
      let description = cleanedData.description;
 
      // Determine the description based on the activity type and status
      if (activityType === "Meeting") {
        if (meetingStatus) {
          switch (meetingStatus) {
            case "Scheduled":
              description = "Meeting scheduled";
              break;
            case "Canceled":
              description = "Meeting canceled";
              break;
            case "Completed":
              description = "Meeting completed";
              break;
            default:
              description = "Meeting status updated";
          }
        } else {
          description = "Meeting updated";
        }
      } else if (activityType === "Task") {
        if (taskStatus) {
          switch (taskStatus) {
            case "Pending":
              description = "Task is pending";
              break;
            case "Completed":
              description = "Task completed";
              break;
            default:
              description = "Task status updated";
          }
        } else {
          description = "Task updated";
        }
      } else if (activityType === "Mail") {
        description = "Mail updated";
      } else if (activityType === "Note") {
        description = "Note updated";
      } else {
        description = "Activity updated";
      }
 
      // Combine cleaned data with activityType, userName, userRole, and updated description
      const updatedData = {
        ...cleanedData,
        activityType,
        userName: user.userName, // Track the user who edited
        userRole: user.role,     // Track the user's role
        meetingStatus,
        taskStatus,
        description,             // Updated description
      };
 
      // Find and update the activity
      const updatedActivity = await Activity.findByIdAndUpdate(activityId, updatedData, { new: true });
 
      // Check if the activity exists
      if (!updatedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with success and the updated activity
      res.status(200).json({
        message: "Activity updated successfully",
        updatedActivity,
      });
 
      ActivityLog(req, "Successfully", updatedActivity._id);
      next(); // Pass control to the next middleware if any
 
    } catch (error) {
      console.error("Error updating activity:", error);
 
      ActivityLog(req, "Failed");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
  exports.deleteActivity = async (req, res,next) => {
    try {
      const { activityId } = req.params; // Extract activityId from request parameters
 
      // Validate the activityId
      if (!activityId) {
        return res.status(400).json({ message: "Activity ID is required" });
      }
 
      // Find and delete the activity
      const deletedActivity = await Activity.findByIdAndDelete(activityId);
 
      // Check if the activity exists
      if (!deletedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with success
      res.status(200).json({
        message: "Activity deleted successfully",
        deletedActivity,
      });
 
      ActivityLog(req, "successfully", deletedActivity._id);
      next();
 
    } catch (error) {
      console.error("Error deleting activity:", error);
 
      ActivityLog(req, "Failed");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };

  
 
 
  exports.getLeadsActivityDetails = async (req, res, next) => {
    try {
      const { leadId } = req.params;
      const { activityType, dateFilter } = req.query;
   
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required" });
      }
   
      // Base query
      let query = { leadId };
      if (activityType) query.activityType = activityType;
   
      // Handle date filtering for Task or Meeting
      if (["Task", "Meeting"].includes(activityType) && dateFilter) {
        const currentDate = new Date();
        let startDate, endDate;
   
        switch (dateFilter) {
          case "tomorrow":
            startDate = new Date();
            startDate.setDate(currentDate.getDate() + 1);
            startDate.setHours(0, 0, 0, 0);
   
            endDate = new Date(startDate);
            endDate.setHours(23, 59, 59, 999);
            break;
   
          case "next7days":
            startDate = new Date();
            startDate.setDate(currentDate.getDate() + 1);
            startDate.setHours(0, 0, 0, 0);
   
            endDate = new Date();
            endDate.setDate(currentDate.getDate() + 7);
            endDate.setHours(23, 59, 59, 999);
            break;
   
          case "next30days":
            startDate = new Date();
            startDate.setDate(currentDate.getDate() + 1);
            startDate.setHours(0, 0, 0, 0);
   
            endDate = new Date();
            endDate.setDate(currentDate.getDate() + 30);
            endDate.setHours(23, 59, 59, 999);
            break;
   
          case "yesterday":
            startDate = new Date();
            startDate.setDate(currentDate.getDate() - 1);
            startDate.setHours(0, 0, 0, 0);
   
            endDate = new Date(startDate);
            endDate.setHours(23, 59, 59, 999);
            break;
   
          default:
            break;
        }
   
        // If startDate and endDate are defined, filter `dueDate`
        if (startDate && endDate) {
          query.dueDate = {
            $gte: startDate.toISOString().split("T")[0], // Convert to 'YYYY-MM-DD'
            $lte: endDate.toISOString().split("T")[0],
          };
        }
      }
   
      // Fetch activities matching the query
      const activities = await Activity.find(query, {
        description: 1,
        userName: 1,
        createdAt: 1,
        emailSubject: 1,
        emailMessage: 1, // Added field
        taskTitle: 1,
        note: 1,
        meetingTitle: 1,
        activityType: 1, // Added field
      }).sort({ createdAt: -1 });
   
      // Map data for response
      const activityDetails = activities.map(activity => {
        const activityInfo = {
          description: activity.description,
          userName: activity.userName,
          createdAt: activity.createdAt,
          activityType: activity.activityType, // Added field
        };
   
        switch (activity.activityType) {
          case "Mail":
            activityInfo.emailSubject = activity.emailSubject;
            activityInfo.emailMessage = activity.emailMessage; // Added field
            break;
          case "Task":
            activityInfo.taskTitle = activity.taskTitle;
            break;
          case "Note":
            activityInfo.note = activity.note;
            break;
          case "Meeting":
            activityInfo.meetingTitle = activity.meetingTitle;
            break;
          default:
            break;
        }
   
        return activityInfo;
      });
   
      // Aggregate to count the number of each activity type
      const activityCounts = await Activity.aggregate([
        { $match: { leadId } }, // Match the specific leadId
        {
          $group: {
            _id: "$activityType",
            count: { $sum: 1 }, // Count the number of activities of each type
          },
        },
      ]);
   
      // Format the counts into a more user-friendly structure
      const counts = activityCounts.reduce((acc, { _id, count }) => {
        acc[_id] = count;
        return acc;
      }, {});
   
      // Respond with the filtered activities and counts
      res.status(200).json({
        message: "Filtered activities retrieved successfully",
        activities: activityDetails,
        counts: {
          Mail: counts.Mail || 0,
          Note: counts.Note || 0,
          Task: counts.Task || 0,
          Meeting: counts.Meeting || 0,
        },
      });
    } catch (error) {
      console.error("Error fetching filtered activities:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
   
 
  exports.getLeadEngagementOverTime = async (req, res) => {
    try {
      const { leadId } = req.params;
      const { date } = req.query;
   
      // if (!date || !/^\d{4}-\d{2}$/.test(date)) {
      //   return res.status(400).json({
      //     message: "Date query parameter is required in YYYY-MM format.",
      //   });
      // }



      const [year, month] = date.split("-").map(Number);
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
   
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required." });
      }
   
      // Count activities by type within the date range
      const engagementCounts = await Activity.aggregate([
        {
          $match: {
            leadId,
            createdAt: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $group: {
            _id: "$activityType",
            count: { $sum: 1 },
          },
        },
      ]);
   
      // Convert aggregation result into a structured response
      const engagementData = {
        Mail: 0,
        Meeting: 0,
        Task: 0,
        Note: 0,
      };
   
      engagementCounts.forEach(({ _id, count }) => {
        engagementData[_id] = count;
      });
   
      res.status(200).json({
        message: "Lead engagement data retrieved successfully.",
        leadId,
        date,
        engagementData,
      });
    } catch (error) {
      console.error("Error fetching lead engagement over time:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
   
 
  exports.getLeadInteraction = async (req, res) => {
    try {
      const { leadId } = req.params;
 
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required." });
      }
 
      // Count activities by type without any date filtering
      const engagementCounts = await Activity.aggregate([
        {
          $match: { leadId },
        },
        {
          $group: {
            _id: "$activityType",
            count: { $sum: 1 },
          },
        },
      ]);
 
      // Convert aggregation result into a structured response
      const engagementData = {
        Mail: 0,
        Meeting: 0,
        Task: 0,
        Note: 0,
      };
 
      engagementCounts.forEach(({ _id, count }) => {
        engagementData[_id] = count;
      });
 
      res.status(200).json({
        message: "Lead engagement data retrieved successfully.",
        leadId,
        engagementData,
      });
    } catch (error) {
      console.error("Error fetching lead engagement over time:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
 
 
 
  // Clean Email Data
  function cleanActivityData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" || value === 0 ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }
 
  // Create New Email
  function createNewActivity(data, ) {
    const newActivity = new Activity({...data,});
    return newActivity.save();
  }
 
 
 
const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
 
    if (operationId) {
      log.operationId = operationId;
    }
 
    req.user = log;
  };
 