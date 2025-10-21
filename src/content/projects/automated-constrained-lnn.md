---
title: "Constrained Lagrangian Neural Networks with Learned Physical Constraints"
excerpt: "Developing a neural framework that learns both system dynamics and hidden physical constraints directly from data."
date: "2025-09-01"
status: "Ongoing"
technologies: ["Lagrangian Neural Networks", "Deep Learning", "Physics-Informed Learning", "Symbolic Regression", "PyTorch", "Python"]
---

This project is conducted as my **Bachelor’s Thesis** at **Boğaziçi University**, co-supervised by **Asst. Prof. İnci Meliha Baytaş** and **Asst. Prof. Arkadaş Özakin**, starting in **September 2025**.

---

## Project Overview

This research extends the framework of **Lagrangian Neural Networks (LNNs)** by introducing **automated constraint learning**, forming a **Constrained Lagrangian Neural Network (CLNN)** architecture.  
The model jointly learns the **Lagrangian** and **system constraints** from trajectory data, enabling physically consistent modeling even when the governing equations are partially constrained or unknown.

---

## Research Goals

- Develop a **hybrid loss** that integrates constraint prediction with Lagrangian dynamics learning  
- Enable **automatic discovery of hidden constraints** (e.g., conservation laws, holonomic constraints) from raw data  
- Benchmark the proposed CLNN against standard LNNs and physics-informed baselines  
- Demonstrate how AI can uncover **interpretable physical structure** directly from motion data  

---

## Key Technologies

- **Lagrangian Neural Networks (LNNs)**: Neural architectures enforcing physics through the Lagrangian formalism  
- **Constraint Learning**: Auxiliary networks predicting implicit system constraints  
- **PyTorch**: Deep learning framework for implementation and training  
- **Symbolic Regression**: Extracting interpretable expressions from learned dynamics  
- **Python**: Main environment for simulation, modeling, and analysis  
