const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
//const GraphQLEnumType = require('graphql').GraphQLEnumType;
//const GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
//const GraphQLNonNull = require('graphql').GraphQLNonNull;
//const GraphQLNull = require('graphql').GraphQLNull;
//const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;
//const GraphQLInt = require('graphql').GraphQLInt;
//const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLDate = require('graphql-date');
const TrialRequestModel = require('../models/TrialRequest');

require('dotenv').config();

const trialRequestType = new GraphQLObjectType({
    name: "trialRequestType",
    fields: () => (
        {
            _id: {
                type: GraphQLString
            },
            firstName: {
                type: GraphQLString
            },
            lastName: {
                type: GraphQLString
            },
            phoneNumber: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            resolved: {
                type: GraphQLBoolean
            }
        }
    )
});

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: function () {
        return {
            getAllTrialRequests: {
                type: new GraphQLList(trialRequestType),
                resolve: function () {
                    const trialRequests = TrialRequestModel.find().exec();
                    if (!trialRequests) {
                        return null;
                    }
                    return trialRequests;
                }
            },
            getUnresolvedRequests: {
                type: new GraphQLList(trialRequestType),
                resolve: function () {
                    const trialRequests = TrialRequestModel.find({ resolved: false }).exec();
                    if (!trialRequests) {
                        return null;
                    }
                    return trialRequests;
                }
            },
            getResolvedRequests: {
                type: new GraphQLList(trialRequestType),
                resolve: function () {
                    const trialRequests = TrialRequestModel.find({ resolved: true }).exec();
                    if (!trialRequests) {
                        return null;
                    }
                    return trialRequests;
                }
            },
        }
    }
});

module.exports = new GraphQLSchema({ query: queryType });