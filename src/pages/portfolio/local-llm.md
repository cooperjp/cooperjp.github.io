---
title: "Running LLMs Locally"
description: "Guide to running LLM's locally using Ollama"
date: 2025-02-04
layout: "../../layouts/PortfolioLayout.astro" 
---
## Article Objective

In this article, we will run a large language model (LLM) locally, on consumer hardware. This allows one to use LLMs offline, which offers privacy, customization, and no usage fees. 

## Installation

I am using a laptop, with Windows OS. To start, download Ollama from [Ollama.com](https://ollama.com/). Once installed, in your command line try:

```bash
 ollama --version
 ```
If it is installed, you should see the version number.

Next, we will download and run a smaller model of the open source DeepSeek-R1 Model. 

To download:
```bash
llama pull deepseek-r1:1.5b
```

Next, to start an interactive session in terminal:
```bash
llama run deepseek-r1:1.5b
```

You can now chat directly with the model! For further capabilities, we can use increasingly large parameter models, but it requires more RAM. As a general rule of thumb, you want ~1GB RAM per B parameters. The main attraction of running LLM's locally is privacy, instead of sending queries to wherever the LLM is hosted, you are sending queries directly to your own hardware.
