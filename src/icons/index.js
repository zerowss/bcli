import Vue from "vue";
import svgIcons from "./svgIcons";
Vue.component("svg-icon", svgIcons);
// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context("./svg", true, /\.svg$/);
requireAll(req);
