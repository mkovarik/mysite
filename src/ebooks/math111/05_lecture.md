# July 13

Today, we wrap up our week of review.

### t-tests

In the homework last night, the population standard deviation \\( \sigma
\\) was not given. Rather, inference was to be done with the sample
standard deviation. This is just practical statistics.

However, doing so hurts the validity of the hypothesis test since the
standard error is an approximation. One way to tread around this is by
using the **t-test**. This is very similar to the previously discussed
hypothesis test (the "z-test"), but with a "fatter" distribution.

Visually, a **t-distribution** is a probability distribution whose
density curve is a bell curve, similar to the z-curve. However, it has
much "fatter tails". The fatter tails result in larger p-values, which
makes up for the following "errors":

1. The data may be too small and/or too skewed to confidently use the
   central limit theorem.
2. The population standard deviation is unavailable (almost always be
   the case), requiring us to use the sample standard deviation.
   
Because using the t-distribution requires less assumptions, it is
more widely used.
   
The t-distribution is specified by its **degrees of freedom** (df),
which is a positive integer. Lower degrees of freedom means fatter tails.
Higher degrees of freedom means skinnier tails. As the degrees of freedom
gets larger, the t-distribution approximates a standard normal random
variable. That is to say, the standard normal random variable can be
thought of as a t-distribution with infinite degrees of freedom.

The sample mean \\(\bar x\\) may be modeled after a t-distribution with
\\( n - 1\\) degrees of freedom (n being the sample size). The 
**standard error** is given as 

\\[\text{standard error} = \frac{s}{\sqrt n}. \\]

Here, \\(s\\) is the **sample standard deviation**, given by

\\[ s = \sqrt{\frac{1}{n-1} \sum (x_i - \bar x)^2}. \\]

The \\(1 - \alpha\\) two-sided confidence interval for \\( \bar x \\)
is then given as

\\[\bar x \pm t_{\alpha / 2} \frac{s}{\sqrt{n}}.\\]

Here, \\(t_{\alpha / 2} \\) is the endpoint of the right tail of a 
t-curve such that the tail has area \\( \alpha / 2\\). This t-curve
is calculated with degrees of freedom \\( n - 1 \\). The values of
\\( t_{\alpha} \\) is commonly tabulated for several values of 
\\( \alpha \\).

The t-distribution can be used for hypothesis testing. This is called a
**t-test**. First, define the **t-statistic** as follows (using notation
from the previous lectures):

\\[t = \frac{\bar x - \mu_0}{\sigma / \sqrt n}.\\]

Given the null hypotheses \\( \mu = \mu_0 \\), p-values with the
t-statistic is calculated as follows:

<table>
  <tr>
    <td>Alternative hypothesis</td>
    <td>p-value</td>
  </tr>
  <tr>
    <td>\(\mu > \mu_0\)</td>
    <td>\(P(T > t)\)</td>
  </tr>
  <tr>
    <td>\(\mu < \mu_0\)</td>
    <td>\(P(T < t)\)</td>
  </tr>
  <tr>
    <td>\(\mu \neq \mu_0\)</td>
    <td>\( 2P(T > t) \) (if t is postivie),
    \( 2P(T < t) \) (if t is negative). </td>
  </tr>
</table>

Here, \\( T\\) is a random variable taking a t-distribution with
\\(n-1\\) degrees of freedom. Note that the p-values cannot be
calculated exactly with the table provided in class. Instead, comparing
the values t-statistic with the tabulated values of \\( t_{\alpha} \\)
will give an interval of possible p-values. This interval is good enough
if the test's significance level is common (1%, 5%, 10%). Otherwise,
a computer can compute these values quite easily (next section).

### When to use t-curves over the z-curve

t-tests tend to work better than z-tests when the population is small.
It is also more tolerant of non-normality (such as the case when the
sample is skewed in one direction).

In *Introductory Statistics*, it says that the z-test should be employed
when the population standard deviation \\( \sigma \\) is known and the
t-test when \\( \sigma \\) has to be approximated by the sample standard
deviation \\( s \\). There are theoretical reasons why this is true.

However, in reality, \\( \sigma \\) is typically unknown and would have
to be approximated by \\( s \\). Regardless, the t-curve approximate
the z-curve for large sample sizes. Therefore, the z-test can be used
if n is "large".

The only time that z-tests produce better results than the t-test is
when the sample is normal or large and \\( \sigma \\) is known.

When \\( \sigma \\) is unknown (as it usually is the case), then z-tests
can be beneficial if the sample size is very large. The difference
between the z-test and t-test is very small. Moreover, calculating
p-values by hand is more precise with z-tests.

### Homework (Due July 17th)

[Solutions](static/hw4sol.pdf)

1. Check out [this review sheet](static/hyptest_rev.pdf) for a summary
   of hypothesis testing of one-sample means.
2. Review chapter 4 and section 5.1 of *OpenIntro Statistics* or 
   chapters 8 and 9 of *Introductory Statistics* (sans section 9.7).
3. Answer the following questions:
   - Define the sample mean
   - Define the sample standard deviation
   - Define the standard error (+ formulas for standard error for the sample mean).
   - Define the margin of error (+ formulas for margin of error for the sample mean)
   - What is a confidence level and a significance level. How are they related?
   - Describe the (frequentist) hypothesis testing methodology
     (including null/alternative hypotheses, significance levels,
      test statistics, and p-values)
   - Describe the difference between the critical value approach to
     hypothesis testing verses the p-value approach. Which do you think
     is better?
   - What are some assumptions of doing hypothesis tests of the sample
     mean? How would you verify those assumptions?
   - What is the power of a hypothesis test?
4. Consider the following summary statistics:
    - number of observations: 225
    - mean: 9.5
    - standard deviation: 4
    
   Calculate the z-score for the null hypothesis \\( \mu = 10 \\).
   Then use that z-score to compute p-value for each of the following 
   alternative hypothesese:
    - \\( \mu > 10 \\)
    - \\( \mu < 10 \\)
    - \\( \mu \neq 10 \\).
5. An instructor tries to create a test so that the average grade is an
   85\. The grades of her 16 students are as follows: 58, 65, 75, 75, 78,
   80, 85, 86, 86, 92, 94, 94, 96, 98, 99, 100.
   The instructor is trying to determine if her test is not of the
   intended difficulty. She does so with a hypothesis test.
    - The instructor sets the null hypothesis to be \\(\mu = 85 \\) and
      the alternative hypothesis to be \\( \mu \neq 85 \\). Describe why
      this is a good choice.
    - Describe why doing a t-test is more appropriate than a z-test in
      this case.
    - Calculate the sample mean and sample standard deviation.
    - Approximate the p-value for the test. Given a 10% significance, can
      you reject the null hypothesis that the test is of the intended
      difficulty? (*Note*: since you are performing a t-test, you can
      only provide a rough range of possible p-values without resorting
      to a computer)
    - Calculate a 90% two-sided confidence interval \\( \bar x \pm 
      t_{\alpha / 2 } \frac{s}{\sqrt n}\\) for the sample mean. Does the
      null value \\(\mu_0 = 85\\) lie in this interval? Is this answer
      consistent with the result of your hypothesis test?
6. In preparation for Monday's lecture, read section 5.2 of *OpenIntro
   Statistics* or section 10.5 of *Introductory Statistics*. This
   material covers inference of paired data.
    
