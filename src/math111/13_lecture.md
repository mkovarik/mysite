# July 25

### Population proportions

Recall that a **Bernoulli trial** is a series of independent experiments
that has two outcomes: "success" or "fail". Whether an outcome counts
as a sucess or as a fail is somewhat arbitrary. However, it is important
that the probability \\(p\\) of a success is constant throughout the
experiment.

The results of a Bernoulli trial are called **categorical data**. This
refers to outcomes that can take one of a finite number of possible values
(2 in this case). This is opposed to numerical data, which we learned

Here, \\(p\\) is the **population proportion**, which is a population
parameter. Given a list of outcomes, the **sample proportion**
\\(\hat p\\) is given in the most obvious way:

\\[\hat p = \frac{\text{number of successes}}{\text{number of
experiments}.}\\]

This is, of course, the (frequentist) definition of the probability
\\(p\\) provided that the number of experiments is large.

Some facts pertaining to the sample proportion:

* \\(\hat p\\) is an unbiased estimator of \\(p\\).
* The standard error for the sample proportion is given by
  \\[\sigma_{\hat p} = \sqrt{\frac{p(1-p)}{n}}.\\]
  Here, \\(n\\) is the total number of experiments. In practice,
  the standard error is approximated by replacing \\(p\\) in the
  formula (which is unknown) with \\(\hat p\\) (which is known).
* For large \\(n\\), \\(\hat p\\) is approximately normal.

The population proportion \\(p\\) may be thought of as the expected
value for the random variable taking the value of 1 for success and
0 for failure. Then the sample proportion \\( \hat p \\) is the
sample mean for this random variable.

As a result, by the central limit theorem, \\( \hat p \\) is roughly
normal if \\(n\\) is large. In practice, we want the number of successes
to be greater than 5 and the number of failures to be greater than 5.

for normality. The reason why this threshold is so low is that the
true distribution for \\( n \hat p \\) is binomial. And such a
distribution converges rapidly to a normal distribution.

### Estimation and inference with population proportions

The sample proportion may be thought of as a sample mean. The result
of this is that the methods of inference with population proportions
is similar to that for population means. The difference is the formula
given for the standard error. Instead of using
\\[\frac{s}{\sqrt n}\\]
for the standard error, we instead use
\\[\sqrt \frac{\hat p (1 - \hat p)}{n}.\\]

For example, the \\(1 - \alpha\\) two-sided confidence interval is given
by
\\[\hat p \pm z_{\alpha / 2} \sqrt \frac{\hat p (1 - \hat p)}{n}.\\]

Now suppose one is trying to do inference with population proportions. The
null hypothesis will be of the form

\\[H_0 : p = p_0. \\]

In this case, under the null hypothesis, we use the following formula for
the standard error:
\\[\sqrt \frac{p_0 (1 - p_0)}{n}.\\]
That is, we are replacing \\(p\\) with \\(p_0\\) and *not* with
\\(\hat p\\).

The z-statistic is then given by

\\[z = \frac{\hat p - p_0}{\sqrt{p_0 (1-p_0)/n}}.\\]

Under \\(H_0\\), this is a standard normal random variable. Calculating
p-values from this test statistic depends on the alternative hypothesis
in the usual way:

* Left tail: \\(p < p_0\\),
* Right tail: \\(p > p_0\\),
* Two tail: \\(p \neq p_0\\).

To do one-population inferences with proportions, we rely on the following
assumptions:

1. Observations are independent (simple random sample).
2. \\(np_0\\) and \\(n(1-p0)\\) should be large (at least 5).

Two-population proportions are similar. Suppose the null hypothesis is
\\(p_1 = p_2\\), where \\(p_1\\) and \\(p_2\\) are the population
proportions.

Under the null hypothesis, both populations have the same variance. As
a result, one will use the **pooled sample proportion**:

\\[\hat p_p = \frac{x_1 + x_2}{n_1 + n_2}.\\]

Here, \\(x_1\\) and \\(x_2\\) are the number of successes.
This equation should make sense. Basically, \\(\hat p_p\\) is the sample
proportion if we were to combine both samples. The \\(z\\)-statistic
is then given by

\\[z = \frac{\hat p_1 - \hat p_2}{\sqrt{\hat p_p (1 - \hat p_p)}
\sqrt{(1/n_1) + (1/n_2)}}.\\]

The assumptions for this test are as follows:

1. Simple random samples (observations independent *within* samples)
2. Independent samples (observations independent *between* samples)
3. The number of successes and failures for both samples should be
   at least 5.

### Homework

1. Again consider the *Lady Tasting Tea* experiment. But now suppose she
   does not know how many cups are brewed with milk first. So that her
   guess for each cup are independent. She tasted 20 cups and was able
   to identify 16 of them. Suppose that the probability of her correctly
   identifying any one particular cup is \\(p\\).
    - The null hypothesis for this experiment is \\(p=\frac{1}{2}\\),
      and the alternative hypothesis is \\(p>\frac{1}{2}\\). Why is
      this the case?
    - Suppose the Lady correctly guessed 16 out of of the 20 cups. Calculate
      the \\(z\\)-statistic corresponding to the null hypothesis. Under the
      null hypothesis, why can we assume this statistic is normal?
    - Calculate the \\(p\\)-value associated with the above \\(z\\)-statistic.
      Do you believe that the Lady has the ability to tell if tea was brewed
      with milk or with water first?
2. Do exercises 6.7 and 6.31 of *OpenIntro Statistics*.
3. Read section 6.3 of *OpenIntro Statistics* or sections 13.1 and 13.2 of
   *Introductory Statistics*.