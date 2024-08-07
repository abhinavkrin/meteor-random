// We use cryptographically strong PRNGs (crypto.getRandomBytes())
// When using crypto.getRandomValues(), our primitive is hexString(),
// from which we construct fraction().
import RandomGenerator from "./AbstractRandomGenerator.js";
import createRandom from "./createRandom.js";
import NodeRandomGenerator from "./NodeRandomGenerator.js";

const Random = createRandom(new NodeRandomGenerator());

// CommonJS compatibility
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
	module.exports = Random;
	module.exports.default = Random;
}

export { Random as default, RandomGenerator };
