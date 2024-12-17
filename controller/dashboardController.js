const Area = require('../database/model/area');
const Region = require('../database/model/region')
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent");
const AreaManager = require("../database/model/areaManager");
const RegionManager = require("../database/model/regionManager");
const Bda = require("../database/model/bda");




exports.getDocumentCounts = async (req, res) => {
    try {
      // Fetch counts for all collections in parallel
      const [
        totalArea,
        totalRegion,
        totalSupervisors,
        totalSupportAgents,
        totalAreaManagers,
        totalRegionManagers,
        totalBdas
      ] = await Promise.all([
        Area.countDocuments(),
        Region.countDocuments(),
        Supervisor.countDocuments(),
        SupportAgent.countDocuments(),
        AreaManager.countDocuments(),
        RegionManager.countDocuments(),
        Bda.countDocuments()
      ]);
  
      // Send response
      res.status(200).json({
        totalArea,
        totalRegion,
        totalSupervisors,
        totalSupportAgents,
        totalAreaManagers,
        totalRegionManagers,
        totalBdas
      });
    } catch (error) {
      console.error("Error fetching document counts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };