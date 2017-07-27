# July 12

### p-values

The last step in a hypothesis test is determining to either reject or fail to
reject the null hypothesis given some significance level (usually 5% in most fields).

The way this is done is with a statistic called
the **p-value**, which measures the plausibility of the null hypothesis.
Small p-values imply that the null hypothesis is implausible, and should be rejected
in favor of the alternative hypothesis. Large p-values imply that the null hypothesis
is quite plausible, and cannot be rejected in favor of the alternative hypothesis.

Let \\(p\\) denote the p-value of a hypothesis test. And let \\(\alpha\\) be the significance
level (probability of a Type I error). If \\(p < \alpha\\), then the null hypothesis should
be rejected. If \\(p > \alpha\\), then there is not sufficient evidence to reject the null
hypothesis.

Imagine a sample has been collected for the purpose of performing a hypothesis test.
Formally, \\(p\\) is the probability of obtaining a result that is at least as favorable to
the alternative hypothesis than the result already obtain should a new, independent sample
be collected.

In the *Lady Drinking Tea* example of yesterday, p = 1.4%, which is **statistically significant**
at the 5% level but not at the 1% level. 

### Type II error

Errors in hypothesis testing can be classified into two types:

1. A **Type I error** is the event of rejecting the null hypothesis given that the null hypothesis
   is actually true (a *false positive*). The probability of this event occurring is the 
   **significance level** \\( \alpha\\). Typically, the rejection criteria is based on a 
   predetermined significance(usually to 5%).
2. A **Type II error** is the event that the null hypothesis is not rejected given the alternate
   hypothesis is true (a *false negative*). The Type I error rate might be denoted as \\(\beta\\).
   Then the **power** of the test is \\(1 - \beta\\). This can be thought of as the probability of
   rejecting the null hypothesis given that the alternative hypothesis is true.

Typically, we want both the Type I and Type II error rates to be small. However, making the Type I
error rate smaller has the effect of increasing the Type II error rate. So choosing a small significance
level will reduce the rate of false positives at the cost of increasing the rate of false negatives.

The type II errors of a test may be reduced by increasing the sample size. The minimal sample size may
be determined with a **power analysis**. We will talk about this more next week.


### Problems with hypothesis testing

Data analysis is not just about plugging numbers into formulas or computers. It is a collection of
methodologies. It is in many ways as much an art as it is a science. And hypothesis testing can
have some pitfalls.

One of these pitfalls is *p-hacking* (also called *data dredging*). This can be used to obtain invalid
results with a very low p-value. The order in which a hypothesis test should go is:

1. Create a hypothesis.
2. Test the hypothesis by collecting a sample and doing statistical analysis.

If these steps are reversed, then there is a possibility for abuse. Suppose one collects data and does
some exploratory data analysis. Then one constructs a multitude of hypothesis and tests each one.
And suppose that none of them are correct. If these hypotheses are tested at 5% significance, then there
is a 5% rate of obtaining false positives for each hypothesis test. But if we are testing a batch of
hypotheses, the error rate is much higher. And this may lead to a publication of false information.

The video blogger *Veritasium* has a [provocative video][v] on this.

### Calculating p-values with Z-scores

Consider the following null hypothesis:

\\[H_0: \mu = \mu_0. \\]

To evaluate the null hypothesis, we calculate the **Z-score**, 

\\[z = \frac{\bar x - \mu_0}{\sigma / \sqrt{n}}.\\]

Here, \\( \sigma \\) is the population standard deviation, \\(n\\) is the sample size, and 
\\(\bar x\\) is the sample mean. If the sample size is large or if the population is normally
distributed, then \\(z\\) is approximately a standard normal random variable. The calculation
of p-values then depends on the sort of alternative hypothesis to be performed:

1. If the alternative hypothesis is \\(\mu > \mu_0\\). Then \\(p\\) is the probability that a
   standard normal random variable \\(Z\\) is greater than \\(z\\). That is, \\(p = P(Z > z)\\).
2. If the alternative hypothesis is \\(\mu < \mu_0\\). Then \\(p\\) is the probability that a
   standard normal random variable \\(Z\\) is less than \\(z\\). That is, \\(p = P(Z < z)\\).
3. If the alternative hypothesis is \\(\mu \neq \mu_0\\), then the p-value is given by
   \\[p = \begin{cases}
    2 P(Z > z) & z>0 \\\\
    2 P(Z < z) & z<0.
   \end{cases}\\]
   That is, \\(p\\) is the probability that the magnitude of \\(Z\\) is greater than the
   magnitude of \\(z\\).

The first two cases result in a **one-sided test**. The third case results in a **two-sided test.**

(Note: to prevent the data dredging problems discussed, one should only choose a one-sided
test *before* looking at the data or else the Type I error rate has increased).

### Homework (Due July 13th)
[Solutions](static/hw3sol.pdf)

1. In [OpenIntro Statistics][ois], do problems 4.24(b), 4.25(b), and 4.26(a) using p-values.
2. Read either section 5.1 of *OpenIntro Statistics* or sections 8.3 and 9.5 of *Introductory
   Statistics*.

[v]: https://www.youtube.com/watch?v=42QuXLucH3Q
[ois]: https://www.openintro.org/stat/textbook.php 
