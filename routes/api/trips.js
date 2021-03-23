const Trip = require('./../../models/trip.js');

module.exports = {
  getTripsByMonth: (req, res) => {
    // retrieve & send data for trips by month
    Trip.countByMonth(req.start_range, req.end_range, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
  getTripsByDayOfWeek: (req, res) => {
    // retrieve & send data for trips by day of week
    Trip.countByDayOfWeek(req.start_range, req.end_range, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
  getTripsByTemperature: (req, res) => {
    // retrieve & send date for trips by temperature range
    Trip.countByTemperature(req.start_range, req.end_range, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  }
}