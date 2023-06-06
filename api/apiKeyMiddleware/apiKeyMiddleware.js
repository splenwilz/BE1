const express = require('express');

import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};