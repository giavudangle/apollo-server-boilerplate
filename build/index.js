"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const throng = require('throng');
const mongoose_1 = __importDefault(require("mongoose"));
const url = require('url');
const app = require('./app');
const config = require('./config');
const mongoHost = new url.URL(config.MONGODB_URI).host;
const startServer = async function () {
    const mongooseOptions = {
        useNewUrlParser: true,
        promiseLibrary: global.Promise
    };
    try {
        await Promise.all([
            mongoose_1.default.connect(config.MONGODB_URI, mongooseOptions),
            app.listen(config.PORT)
        ]);
        // eslint-disable-next-line no-console
        console.log(`Server has started on port: ${config.PORT}, connected to mongo at ${mongoHost}`);
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Could not start the app: `, error);
    }
};
// Let's make Node.js clustered for beter multi-core performance
throng({
    workers: config.WORKERS,
    lifetime: Infinity
}, startServer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDaEMsd0RBQStCO0FBQy9CLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMxQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFBO0FBQ3RELE1BQU0sV0FBVyxHQUFHLEtBQUs7SUFDdkIsTUFBTSxlQUFlLEdBQUc7UUFDdEIsZUFBZSxFQUFFLElBQUk7UUFDckIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPO0tBQy9CLENBQUE7SUFDRCxJQUFJO1FBQ0YsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2hCLGtCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN4QixDQUFDLENBQUE7UUFDRixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsTUFBTSxDQUFDLElBQUksMkJBQTJCLFNBQVMsRUFBRSxDQUFDLENBQUE7S0FDOUY7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ2xEO0FBQ0gsQ0FBQyxDQUFBO0FBQ0QsZ0VBQWdFO0FBQ2hFLE1BQU0sQ0FBQztJQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztJQUN2QixRQUFRLEVBQUUsUUFBUTtDQUNuQixFQUFFLFdBQVcsQ0FBQyxDQUFBIn0=