'use strict';

var url = require('url');

var UsageConsumptionReportRequest = require('../service/UsageConsumptionReportRequestService');

module.exports.createUsageConsumptionReportRequest = function createUsageConsumptionReportRequest (req, res, next) {
  UsageConsumptionReportRequest.createUsageConsumptionReportRequest(req, res, next);
};

module.exports.deleteUsageConsumptionReportRequest = function deleteUsageConsumptionReportRequest (req, res, next) {
  UsageConsumptionReportRequest.deleteUsageConsumptionReportRequest(req, res, next);
};

module.exports.listUsageConsumptionReportRequest = function listUsageConsumptionReportRequest (req, res, next) {
  UsageConsumptionReportRequest.listUsageConsumptionReportRequest(req, res, next);
};

module.exports.retrieveUsageConsumptionReportRequest = function retrieveUsageConsumptionReportRequest (req, res, next) {
  UsageConsumptionReportRequest.retrieveUsageConsumptionReportRequest(req, res, next);
};
