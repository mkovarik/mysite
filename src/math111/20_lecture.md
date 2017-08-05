# August 03

Today, we cover some miscellaneous topics. This is not closely
related with this week's topic (linear regression).

### Choosing sample sizes

Statistical estimation and inference is most effective for when
sample sizes are large. This is for two reasons:

1. Many tests rely on some sort of normality assumption. For large
   samples, such assumptions may be relaxed due to asymptotic
   theorems like the central limit theorem.
2. In statistical modeling, more data allows for more complex models
   without the risk of overfitting data.
3. Large samples reduce the rate of false negatives (Type II errors)
   in hypothesis testing. That is, tests with large samples typically
   have large statistical power.

In reality, large samples may be impossible or costly to obtain. As a
result, the sample size should be determined *a priori* according to
the needs of the experiment.

One way to do so is to specify a maximum value for the margin-of-error
for a given estimate. Denote this as \\(E\\) (the value of
this is determined by the researcher). Recall that the margin-of-error
for a sample mean (\\(\sigma\\) known) is \\(z_{\alpha / 2}
\frac{\sigma}{\sqrt n}\\). We thus require that

\\[ z_{\alpha / 2} \frac{\sigma}{\sqrt{n}}  < E.\\]

Solving for \\(n\\):

\\[n > \left(\frac{z_{\alpha / 2} \cdot \sigma}{E}\right)^2.\\]

The smallest integer value of \\(n\\) satisfying inequality would
therefore give the smallest sample sample size gauranteeing that
the margin-of-error is no greater than \\(E\\).

### Power analysis

Recall that statistical power is the probability rejecting the null
hypothesis given that the alternative hypothesis is true. High
power indicates a lack of Type II errors ("false negatives").

Power is dependent on three things:

* Sample size
* Significance level \\(\alpha\\) (Type I error rate)
* Desired effect size

We have already discussed the first two factors. Increasing the
sample size increases power. Increasing the significance level
also increases power.

However, knowing \\(n\\) and \\(\alpha\\) is not enough to
calculate statistical power. One must also know the **effect
size**. The effect size is a number that measures how inaccurate
a given null hypothesis is. Thus the effect size is zero if the
null hypothesis is true (but it almost never is).

For example, consider a two-tailed, two-population t-test. The
null hypothesis is that that the popluation means \\(\mu_1\\)
and \\(\mu_2\\) are equal. The effect size in this case is
typically defined as

\\[\text{effect size} = \frac{|\mu_1 - \mu_2|}{\sigma}.\\]

Here, \\(\sigma\\) may be taken to be the standard deviation of the
first or second population (or both if homoscedasticity is assumed).
If large effect sizes are observed (in this case, 0.5 may be
considered "large"), the test is said to be **practically
significant**.

1. Choose a significance level. 5% is typical.
2. Choose the minimum effect size required for a test to be "practically
   significant".
3. Choose the desired power level (often 80%).
4. Calculate the minumum sample size based off of the previous three steps.
   This is done typically done using statistical software (which
   itself uses mathematics).

This procedure is called **power analysis**, and is an essential aspect of
experimental design.



### Homework (Due August 08)

If you are willing and able, install [R][R] and optionally
[Rstudio][Rstudio] on your personal computer.

[R]: https://cran.cnr.berkeley.edu/
[Rstudio]: https://www.rstudio.com/