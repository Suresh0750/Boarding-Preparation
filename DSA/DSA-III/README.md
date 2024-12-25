# Heap

    A Heap is a tree-based data structure that satisfies the heap property. It is commonly used for implementing priority queues, sorting algorithms (like heap sort), and efficient access to the minimum or maximum value of a collection.

# tree 

    A tree in data structures is a hierarchical model used to represent data in a connected, acyclic graph format. It is a collection of nodes, where each node contains a value or data and has a relationship to other nodes. The nodes are connected by edges, and a tree structure has the following key characteristics:

# Root: 
    The starting point of the tree, where traversal begins.
# Node: 
    A data element in the tree.
# Parent: 
    A node that has one or more child nodes.
# Child: 
    A node that is a descendant of another node.
# Siblings: 
    Nodes that share the same parent.
# Leaf: 
    A node that has no children.

# AVL Tree: 

    A self-balancing binary search tree where the difference in height between the left and right subtrees of any node is at most one.

# degree of node
    In a tree data structure, the degree of a node refers to the number of children that the node has. This is a measure of how many direct descendants the node has in the tree.

# internal node

    internal node refers to any node that has at least one child. This means the node is not a leaf node (which has no children), but instead has one or more descendants.

# types of trees

    Binary Tree
    Binary Search Tree (BST):
    AVL Tree: 
    Red-Black Tree
    Heap

# Binary tree

    A Binary Tree is a type of data structure that consists of nodes, where each node has at most two children, typically referred to as the left child and right child. It is a hierarchical structure, with one node called the root at the top, from which the rest of the tree branches out.

# Balanced tree     

    A balanced tree is a type of binary tree where the height difference between the left and right subtrees of any node is minimal, ensuring efficient operations such as search, insert, and delete. The idea is to maintain balance so that the tree remains shallow, thus avoiding performance degradation due to excessively deep trees.

# application of tree
    v8 use abstract syntax tree
    Hierarchical Data Representation (HTML DOM)
    Routing and Navigation
    Decision Making and AI

# BFS 
    BFS (Breadth-First Search) in Trees
    WHAT : 
        BFS is a graph/tree traversal algorithm that explores all the nodes at the present depth level before moving on to nodes at the next depth level.
        BFS is often used for shortest path finding in unweighted graphs.

# DFS
    DFS (Depth-First Search)
    WHAT :
        DFS is a graph/tree traversal algorithm that explores as far as possible along each branch before backtracking.
        DFS uses a stack or recursion to visit nodes, going deep into the tree as much as possible before exploring other branches.


# post Order >
# inOrder ^
# preOrder /
          /___


# heap

    A Heap is a specialized tree-based data structure that satisfies the heap property. It is often used to implement priority queues and sorting algorithms like Heap Sort.

# Heapify

    Heapify is a process used to maintain or convert a binary tree into a Heap (Max-Heap or Min-Heap) by ensuring that the heap property is satisfied at every node.

# application of Heap

    Priority Queue
    Heap Sort
    Scheduling Tasks
    Real-Time Event Management
        
# trie

    A Trie (pronounced as "try") is a tree-based data structure that is used to efficiently store and retrieve keys in a dataset of strings. It is particularly well-suited for applications involving strings, such as autocomplete, dictionary lookups, and prefix-based search.

# Prefix

    A Prefix Tree, also known as a Trie, is a specialized tree-like data structure used for storing strings in a way that allows for efficient prefix-based searching and retrieval. It's primarily used in applications where prefix matching is required, such as autocomplete systems, spell-checking, and dictionary implementations.

# application of trie

    Autocomplete and Search Suggestions
    Spell Checking
    Dictionary and Word Storage
    Pattern Matching and Searching


# Graphs

    A Graph is a fundamental data structure used in computer science to represent relationships or connections between objects. It consists of a set of vertices (also called nodes) and a set of edges (also called arcs) that connect pairs of vertices. Graphs are widely used to model various types of relationships, including social networks, road maps, and network topologies.

# Vertex

    Vertex (Node): A fundamental unit or point in the graph. It represents an entity or object.

# Edges

    A connection between two vertices. It can either be directed or undirected, depending on the relationship.

# weights

    Some graphs have weighted edges, where each edge has a value (weight) associated with it, representing the cost, distance, or any other measurable quantity.

# Adjacency list 

    The adjacency list is a common and efficient way to represent a graph in computer science. In this representation, each vertex (node) in the graph maintains a list of its adjacent vertices.

# Adjacency matrix

    An adjacency matrix is a 2D array or table used to represent a graph. Each element in the matrix indicates whether pairs of vertices are adjacent or not in the graph.

# Cycle in a Graph.

    A cycle in a graph is a path that starts and ends at the same vertex without traversing any edge more than once. In other words, a cycle occurs when there is a path where the first and last vertices are the same and there are no repeated edges or vertices (except for the starting/ending vertex).

# isolated nodes.

    An isolated node (also called an isolated vertex) in a graph is a node that has no edges connecting it to any other nodes in the graph. In other words, an isolated node has zero degree, meaning it is not connected to any other node.'   

# priority queue

    A Priority Queue is a type of data structure that operates similar to a regular queue, but with an added feature: each element in a priority queue has a priority associated with it. The key difference is that in a priority queue, elements are dequeued based on their priority rather than the order they were added. This means elements with higher priority are served before elements with lower priority, regardless of when they were inserted into the queue.


