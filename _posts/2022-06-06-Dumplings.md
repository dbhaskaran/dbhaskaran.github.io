---
layout: post
title:  "Dumplings of San Francisco Bay Area: Review"
date:   2021-06-06 15:28:00
author: Deepak Bhaskaran
type: travel
---

## Dumplings
<p>
Today I will review the seminal <b>End-to-End Arguments in System Design</b> paper by J. Saltzer, D. Reed, and D. Clark. Engineering computer systems is all about tradeoffs we need to make to optimize one parameter over the other. This paper discusses a design principle for distributed systems, called the end-to-end argument and gives some examples for real world systems where this design principle is beneficial. The end to end argument states that fault tolerance functions placed at the bottom levels of a system may be of little value when compared with the cost of providing them at that low level. Thus it is better if these functions are placed on the edges. 
</p>

<p>
The first example discussed in detail in this paper is regarding a careful file transfer system. At the 2 endpoints are the (application level) file transfer app at the sender and receiver ends. The flow of control is as follows- the file transfer app at the sender requests the OS for the file. The sender OS reads the file from its File system and returns it to the app. The sender app transfers the file over the communication network to the receiver app. The receiver file transfer app sends the file to the receiver OS which writes to its file system. We might think that if we put a lot of effort for reliability at lower levels (the data communication layer) maybe by using TCP, then it is not important to take fault tolerance measures within the application layer. But on careful analysis, we can see that failure of file transmission can occur due to faulty app, faulty local file system, corrupted file, faulty storage component at either end, or even due to flaky communication. Agreed that some low level effort may have an impact on application performance. We can reinforce reliability mechanisms at every possible step to reduce the probability of error (duplicate copies, timeout and retry, OS crash recovery, file system crash recovery, etc.). But the end-to-end check of the file transfer application must still be implemented no matter how reliable the communication system becomes. So the key idea is that we should not overly spend effort to get things perfect at the lower levels. Some other examples discussed in the paper are bit-error recovery, security using encryption, duplicate message suppression, recovery from system crashes, and delivery acknowledgment.
</p>

## What I liked about this paper
<p>The paper is a very good example of the 80-20 rule- how the 20% of effort spent of right things can help solve 80% of the problem. It provides a succinct system design principle which is applicable to most of the distributed systems, and is easy to reason about.
</p>

## Critical comments
<p>
The paper is a bit dated and most of the arguments are for earlier computer systems (some of which still hold the test of time). I would like to see more examples on how these principles hold up for the design for today’s large scale distributed systems like streaming services (Kafka), big data systems, parameter servers for large scale machine learning.
</p>

## Questions
<p>
How do these principles hold up for the design for today’s large scale distributed systems like streaming services (Kafka), big data systems, parameter servers for large scale machine learning ?</p>