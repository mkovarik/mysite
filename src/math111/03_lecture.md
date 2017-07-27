# July 11

A note about yesterday's homework: if you read section 4.3 of OpenIntro
Statistics as directed, then you read a bit more than what is intended.
In particular, the topic of p-values is scheduled for Thursday.

### Lady Tasting Tea

Hypothesis testing was introduced in Ronald Fisher's 1935 book *The Design
of Experiments*. In it, the concept of hypothesis testing was introduced
in the *Lady Tasting Tea* experiment.

In British tea culture, both milk and water are used. And many tea-drinkers
are adamant about which liquid should be added first. One British woman
even claimed she could taste the difference between the two techniques.

That is to say, suppose that \\(p\\) is the probability of the Lady correctly
guessing her. The Lady is claiming that \\(p > \frac{1}{2}\\). Fisher took the
skeptical position that \\(p = \frac{1}{2} \\).

In the parlance of inferential statistics, the **null hypothesis** (Fisher's
position) is that \\(p = \frac{1}{2} \\). The **alternative hypothesis** (the
Lady's position) is that \\(p > \frac{1}{2}\\).

Eight cups were given to the lady in random order. Four were prepared with milk
added first. Four were prepared with water added first. The Lady was able to
correctly identify the brewing method all eight cups.

Naturally, one would assume that the alternative hypothesis is true. But what if
the error was due to chance? Under the Fisher's null hypothesis, it can be shown
that the probability of the Lady guessing all cups correctly was a mere 
\\(\frac{1}{70} \approx 1.4%\\). This strongly suggests that the null hypothesis
must be rejected or otherwise one would have to accept an unlikely outcome.

### Null and alternate hypothesis

A hypothesis test requires first specifying the following:

1. The **null hypothesis**, which is a statement of a skeptical perspective. A
   hypothesis test will either reject or fail to reject the null hypothesis.
   Note that **the failure to reject is not the same as acceptance**. The null
   hypothesis cannot be proved, only disproved.
2. An **alternative hypothesis**, which is a statement that is to be proved.
   Rejecting the null hypothesis in favor of the alternative hypothesis supports
   the validity of the alternative hypothesis. Failure to reject the null
   hypothesis, however, does not disprove the alternative hypothesis.
3. A significance level \\(\alpha\\). This is the probability of rejecting the
   null hypothesis assuming it is true. This mistake is known **Type I error**,
   whose probability is \\(\alpha \\). In hypothesis testing, we define the
   rejection criterion so that 

The null hypothesis is typically denoted by \\(H_0\\). The alternative hypothesis
is denoted in *Introductory Statistics* by \\( H_a \\) and in *OpenIntro Statistics*
by \\(H_A\\).

The procedure for rejecting or not rejecting a null hypothesis is called a **hypothesis
test**.

### Numerical Example

Confidence intervals can be used in testing hypothesis (though p-values is more
widely used).

Refer to yesterday's example of the experiment IQ testing a sample of anime-watching
teens. And suppose want to figure if the IQ for the population of anime-watching
teens were on average *difference* than the mean IQ for the general population (100).

Denote \\(\mu\\) as the mean of the IQ's for the population of anime-watching teens.
The hypotheses are as follows:

\\[\begin{aligned}
H_0 &: \mu = 100 \\\\
H_A &: \mu \neq 100
\end{aligned}\\]

A hypothesis test with these hypothese is called a **two-sided test**, because
the alternative test is asserting that  \\(\mu < 100\\) (one side) or if
\\(\mu > 100 \\) (the other side). A **one-sided test** only tests one of these
two statements.

In the previous lecture, we calculated the 95% confidence interval to be
(95.99, 100.89). Since the **null value** 100 lies within the confidence interval,
we *fail to reject the null hypothesis at the 5% significance level*. If the
null value resided in the confidence interval, then the null hypotheses would be
rejected in favor of the alternative hypothesis.


### Homework (Due July 13th)

1. (Extra Credit) Show that the probability of the Lady correctly guessing the
   brewing method of all 8 cups of tea is 1/70 under the null hypothesis that
   she had a 50/50 chance of guessing correctly for any one particular cup.
   Note that she was told that exactly half of the cups had milk added first.
2. Define the following terms:
    - Hypothesis testing
    - Null hypothesis
    - One-sided/two-sided tests
    - Type I error, and its relationship with the significance level
3. Referring to the numerical example, show that the null hypothesis 
   \\(\mu = 100 \\) is rejected when the significance level is increased
   to 10%.
