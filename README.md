# Module Federation Project

## Overview

This project demonstrates the implementation of **Module Federation** using Webpack. The setup includes two applications:
- **myremote**: Remote application exposing components.
- **myhost**: Host application consuming the components from App 1.

Module Federation allows for dynamic imports of code between independently built and deployed applications, enabling micro frontends.

## Project Structure

The project is divided into two main parts:

1. **myremote (Remote)**: Exposes components to be used by other applications.
2. **myhost (Host)**: Imports and uses components from App 1 dynamically.

Both apps are built using **React** and **Webpack 5**, leveraging the module federation feature to share code across applications.

## Features

- **Micro Frontend Architecture**: Using Webpack Module Federation to build separate apps that can share and consume modules.
- **Dynamic Loading**: Remote modules are loaded on demand, reducing the initial bundle size.
- **Independent Deployment**: Each app can be deployed independently and updated separately.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/module-federation-project.git
cd module-federation-project


