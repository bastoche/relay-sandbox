#!/usr/bin/env babel-node
// @flow

import fs from "fs";
import path from "path";

import { printSchema } from "graphql";

import { schema } from "../api/schema";

const schemaPath = path.resolve(__dirname, "../schema.graphql");

fs.writeFileSync(schemaPath, printSchema(schema));
