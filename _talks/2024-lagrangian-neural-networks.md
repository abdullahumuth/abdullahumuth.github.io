---
title: "Using Lagrangian Neural Networks to Learn Physics"
collection: talks
type: "Talk"
permalink: /talks/2024-lagrangian-neural-networks
venue: "Boğaziçi University, Department of Computer Engineering"
date: 2024-01-01
location: "Istanbul, Turkey"
---

We will study Lagrangian Neural Networks, a method that allows us to effectively "learn" the Lagrangian function, a key theoretical quantity in classical mechanics, from observed data alone. And with the help of symbolic regression, we get the underlying mathematical expressions. This seminar invites you to consider the potential of AI in deriving theoretical laws from experimental data, showing how machine learning is increasingly integral to advancing physics.

This is the fifth of the "CMPE ÖTK Student Seminars", a seminar series prepared by undergrad students organized by the Bogazici University Computer Engineering Student Representation Council (CMPE ÖTK), which I am a member of.

## Abstract

This talk explores the intersection of classical mechanics and modern machine learning through Lagrangian Neural Networks (LNNs). Traditional physics relies on first-principles derivations of fundamental laws, but what if we could learn these laws directly from experimental data? Lagrangian Neural Networks offer a physics-informed approach that respects the underlying symmetries and conservation laws of mechanical systems while leveraging the power of deep learning.

The presentation covers:
- The mathematical foundations of Lagrangian mechanics
- How neural networks can be structured to respect physical constraints
- Symbolic regression techniques for discovering mathematical expressions
- Applications to various mechanical systems
- The broader implications for AI-driven scientific discovery

## Key Topics Covered

- **Lagrangian Mechanics Fundamentals**: Review of the Lagrangian formulation and its advantages over Newtonian mechanics
- **Physics-Informed Neural Networks**: How to incorporate physical laws into neural network architectures
- **Symbolic Regression**: Using PySR and other tools to extract mathematical expressions from learned models


## Technical Implementation

The seminar demonstrated practical implementation using:
- PyTorch for neural network development
- PySR for symbolic regression
- Custom architectures that enforce physical constraints
- Trajectory data generation and analysis

## Watch the Seminar

[YouTube Recording](https://www.youtube.com/watch?v=Rbu45RuJc1c)

## About the Series

This seminar was part of the "CMPE ÖTK Student Seminars" series, an initiative I helped organize as Vice Chair of the Undergraduate Student Council for CMPE. The series aims to foster knowledge sharing among undergraduate students and explore cutting-edge research topics at the intersection of computer engineering and other disciplines.

## Related Work

This talk was based on my undergraduate research project (PHYS492) conducted under the supervision of Asst. Prof. Arkadaş Özakın at Boğaziçi University, where I implemented Lagrangian Neural Networks and developed tools for symbolic regression to infer mathematical forms from trajectory data.