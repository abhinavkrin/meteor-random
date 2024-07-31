# @abhinavkrin/meteor-random

Welcome to the `@abhinavkrin/meteor-random` package! This is a direct TypeScript port of Meteor's `random` package, tailored for server-side usage outside of Meteor code.

## Overview

The `@abhinavkrin/meteor-random` package provides a suite of functions for generating random numbers and strings. Utilizing a cryptographically strong pseudorandom number generator (when available), this package ensures robust randomness for your applications. On older browsers or servers lacking sufficient entropy, it gracefully degrades to a weaker random number generator.

## Features

### `Random.id([n])`
Generate a unique identifier, perfect for ensuring uniqueness across your application.
- **Usage**: `Random.id([n])`
- **Example**: `Random.id()` might return `"Jjwjg6gouWLXhMGKW"`
- **Parameter**: `n` (optional) specifies the length of the identifier. Defaults to 17 characters.

### `Random.secret([n])`
Create a random string of printable characters, offering 6 bits of entropy per character. Ideal for security-critical secrets intended for machine consumption.
- **Usage**: `Random.secret([n])`
- **Example**: `Random.secret()` might return a 43-character string.
- **Parameter**: `n` (optional) specifies the length of the secret string. Defaults to 43 characters, providing 256 bits of entropy.

### `Random.fraction()`
Obtain a random number between 0 and 1, similar to `Math.random`.
- **Usage**: `Random.fraction()`
- **Example**: `Random.fraction()` might return `0.735432843`

### `Random.choice(arrayOrString)`
Select a random element from the given array or string.
- **Usage**: `Random.choice(arrayOrString)`
- **Example**: `Random.choice(['apple', 'banana', 'cherry'])` might return `"banana"`

### `Random.hexString(n)`
Generate a random string of `n` hexadecimal digits.
- **Usage**: `Random.hexString(n)`
- **Example**: `Random.hexString(8)` might return `"4f5a1c3b"`
- **Parameter**: `n` specifies the length of the hex string.

## Links
- [Source Code (Released Version)](https://github.com/meteor/meteor/tree/master/packages/random)
- [Source Code (Development Version)](https://github.com/meteor/meteor/tree/devel/packages/random)

Unleash the power of randomness in your TypeScript projects with `@abhinavkrin/meteor-random`! Whether you need unique identifiers, secure secrets, or simple random numbers, this package has got you covered. Dive into the documentation to learn more and start integrating it into your projects today!
