// You are given a list of projects and a list of dependencies (which is
// a list of pairs of projects, where the first project is dependent on the second project).
// All of a project's dependencies must be built before the project is. Find
// a build order that will allow the projects to be built. If there is no valid build order,
// return an error.

// sample input:
//  projects: a, b, c, d, e, f
//  dependencies: (d, a), (b, f), (d, b), (a, f), (c, d)
//  output: f, e, a, b, d, c

class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }
}

// projects: ['a','b','c','d','e', 'f'];
// dependencyArray: [{d: 'a'}, { b: 'f'}, { d: 'b'}, { a: 'f'}, { c: 'd'}], etc
//  where d depends on a, b depends on f, etc

class Project {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.map = {};
    this.dependencies = 0;
  }

  addNeighbour(project) {
    if (!this.map.hasOwnProperty(project.name)) {
      this.children.push(project);
      this.dependencies++;
    }
  }
  
  decrementDependencies() {
    this.dependencies--;
  }

  getDependencies() {
    return this.dependencies;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.map = {};
  }

  getOrCreateNode(name) {
    if (!this.map.hasOwnProperty(name)) {
      let node = new Project(name);
      this.nodes.push(node);
      this.map[name] = node;
    }
    return this.map[name];
  }

  addEdge(startName, endName) {
    let start = this.getOrCreateNode(startName);
    let end = this.getOrCreateNode(endName);
    start.addNeighbour(end);
  }
}


let projectArr = ['a','b','c','d', 'e','f'];
let dependencyArr = [['d','a'], ['b', 'f'], ['d','b'], ['a', 'f'], ['c','d']];

function buildGraph(projectArr, dependencyArr) {
  let graph = new Graph();
  projectArr.forEach((project) => {
    graph.getOrCreateNode(project);
  });

  dependencyArr.forEach((dependency) => {
    let [start, end] = dependency;
    graph.addEdge(start, end);
  });

  return graph;
}

function addNonDependent(order, projects, offset) {
  projects.forEach((project) => {
    if (project.getDependencies() === 0) {
      order[offset] = project;
      offset++;
    }
  });
  return offset;
}

function orderProjects(projects) {
  let order = [];
  let endOfList = addNonDependent(order, projects, 0);
  
  let toBeProcessed = 0;
  while(toBeProcessed < projects.length) {
    let current = order[toBeProcessed];
    if (current === null) { return null; }

    let children = current.children;
    children.forEach((child) => {
      child.decrementDependencies();
    });

    endOfList = addNonDependent(order, projects, endOfList);
    console.log(endOfList);
    toBeProcessed++;
  }
  return order;
}