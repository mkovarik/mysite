# July 10

Today we review statistical estimation theory, particularly estimations
of population means. You should already know this material from
Statistics I. Homework (see the bottom of this page) is due
**tomorrow**. We will also review the syllabus.

### Point estimation of the population mean

Suppose we collect a randomized sample consisting of the numerical
observations \\(x_1, \ldots, x_n \\). Recall that the **sample mean**
\\( \bar x \\) is calculated thusly:

\\[\bar x = \frac{\sum x_i}{n}. \\]

That is, the sample mean is the arithmetic average of the observations.

The reason the sample mean is calculated is because it approximates
the population mean \\( \mu \\). In general, \\(\bar x\\) is a type
of **point estimator** and \\( \mu \\) is the corresponding
**population parameter**.

The sample mean has the following properties:

1. The sample mean is a random variable. If the sample is drawn
   randomly, then any point estimator calculated from the sample must
   also be random.
2. The mean value of \\( \bar x\\) is \\( \mu \\). That is to say,
   \\[\mu_{\bar x} = \mu. \\]
   When the mean of a point estimator is the population parameter it
   tries to estimate, then that point estimator is an said to be
   **unbiased**.
3. The standard deviation of \\( \bar x \\) is (assuming the population
   is much larger than the sample) given by 
   \\[ \sigma_{\bar x} = \frac{\sigma}{\sqrt n},\\] 
   where \\( \sigma \\) is the population standard deviation.
   The standard deviation of a point estimator is often called the
   **standard error** of the estimator.
4. \\( \bar x \\) tends to better approximate \\( \mu \\) when the
   sample size \\( n \\) is large. As \\( n \\) is large, then the
   standard error is small due to the \\(\sqrt{n}\\) in the
   denominator. This property, along with the fact that the sample
   mean is unbiased, means that the sample mean is a **consistent
   estimator** for the population mean.
5. When \\(n\\) is large (in practice, 30 or greater), \\( \bar x\\)
   is approximately normally distributed. This is the **central limit
   theorem**.

### Interval estimation

Simply reporting point estimates is not sufficient for most application.
Point estimates are random and thus may not be very close to the
population parameters they estimate. So it is important to report on
the trustworthiness of a point estimate in addition to the point
estimate itself.

One way to do this is by reporting the standard error of the estimate.
Point estimates with a low standard error are trustworthy. High
standard errors, however, indicate untrustworthy point estimates.

A more sophisticated method is via **confidence interval**, which is
an interval of numbers.

We first specify a **confidence level**. This is a number from 0 to 1.
It can be interpreted as the probability that the population parameter
lies within the confidence interval.

It is useful to think of the confidence level as the probability that
the true population parameter lies within the interval. This is true
*before* a random sample is collected and the confidence interval
calculated. After the sample is collected, the confidence interval is no
longer random. And thus, the probability that the population parameter
is inside the confidence interval is either 100% or 0%.

So one should think of the confidence level as being a measure of belief
as opposed to being a true probability. Unless, of course, you are a
Bayesian statistician, where probability is defined as a measure of
belief.

Construction of confidence intervals typically require the following
information: a point estimate, the theoretical distribution of the
point estimate (including the standard error), and a confidence level.

Many confidence intervals encountered in this course will be of the
form

\\[\text{point estimator} \pm \text{margin of error}. \\]

### Interval estimation of the population mean (\\(\sigma\\) known)

Suppose we collect a simple random sample with the following 
assumptions:

1. The population standard deviation \\( \sigma \\) is known. 
2. The sample is large \\( n > 30\\) or observed to be normal.

Then a \\( 1 - \alpha \\) confidence interval for the population
mean \\( \mu \\) is as follows (\\(\alpha\\) is known as a
**significance level**):

\\[ \bar x \pm z_{\alpha / 2} \frac{\sigma}{\sqrt n}. \\]

Here, \\( z_{\alpha / 2} \\) is defined by the formula:

\\[ P(Z >  z_{c} ) = c. \\]

One can think of \\( z_c\\) as being related to tge percentile function
for the standard normal distribution. For example, \\( z_{0.05} \\)
would be 95th percentile of a large standard normal population.

The following table is useful:

<table>
  <tr>
    <td>\(c\)</td>
    <td>\(z_c\)</td>
  </tr>
  <tr><td>0.050</td><td>1.645</td></tr>
  <tr><td>0.025</td><td>1.960</td></tr>
  <tr><td>0.005</td><td>2.575</td></tr>
</table>

### Numerical example

IQ tests are designed so that the average score is 100 with a standard
deviation of 10.

Suppose a study was performed to measure the effects of watching anime
on teenager's intelligence. An experiment was done where the IQ of 64
of such teenagers were collected. This data is collected in the file
[iq_scores.csv](static/iq_scores.csv).

Statistical software can be used to calculate the sample mean. It is
calculated to be about 98.444. One might therefore conclude that 
watching anime is correlated with lower-than-average IQ scores. However,
this may be due to random chance.

Suppose that the IQ standard deviation for the population anime-watching
teens is still 10. Then the 95% confidence interval for the population
mean is

\\[\begin{aligned}
\bar x \pm z_{\alpha / 2} \frac{\sigma}{\sqrt n}
&= 98.44 \pm z_{0.025} \frac{10}{\sqrt{64}} \\\\
&= 98.44 \pm 1.960 \cdot \frac{10}{8} \\\\
&= 98.44 \pm 2.45 \\\\
&= (95.99, 100.89)
\end{aligned}\\]

Since average IQ for the general population is within this
95% confidence interval, one cannot conclude with 95% confidence that
anime-watching teenagers have lower-than-average IQ's. This sort of
logic is formalized by the hypothesis testing methodology, which we
will review tomorrow.

This work can be done entirely with code. In the R programming language:

```r
> # Read data from iq_scores.csv table
> iq_scores <- read.csv(file="iq_scores.csv")$iq
>
> # Calculates the mean of the sample (=98.4)
> iq_mean <- mean(iq_scores)
>
> # The population standard deviation is 10.
> pop_stdeviation <- 10
>
> # Calculate the sample size (=64)
> sample_size <- length(iq_scores)
>
> # Calculate the standard error (=1.25)
> iq_mean_stderr <- pop_stdeviation / sqrt(sample_size)
>
> # Calculate the margin of error for a 95% confidence interval (=2.45)
> # 
> iq_mean_moe <- qnorm(1 - 0.025) * iq_mean_stderr
>
> # Calculate the 95% confidence interval for the IQ mean
> iq_mean + c(-iq_mean_moe, iq_mean_moe)
[1]  95.98755 100.88745
```

### Appendix: proof of formula

Under the stated assumptions, \\( \bar x \\) is a normal random variable
with mean \\( \mu \\) and standard deviation/error \\( \sigma / \sqrt n
\\). Thus,

\\[ z = \frac{\bar x - \mu}{\sigma / \sqrt{n}} \\]

takes a standard normal distribution. And \\(|z| < z_{\alpha / 2}\\)
with probability \\( 1 - \alpha \\), which is the confidence level.

We may write this expression as

\\[\vert \frac{\bar x - \mu}{\sigma / \sqrt n} \vert < z_{\alpha / 2}.
\\]

Solving for \\(\mu\\):

\\[ \bar x - z_{\alpha / 2} \frac{\sigma}{\sqrt n}< \mu < 
\bar x + z_{\alpha / 2} \frac{\sigma}{\sqrt n}. \\]

### Homework (Due July 11)

1. Read sections 8.1 and 8.2 of *Introductory Statistics* or sections
   4.1 and 4.2 of [OpenIntro Statistics][ois]
2. Define the following terms:
    - Point estimator
    - Unbiased estimator
    - Standard error
    - Margin of error
    - Confidence interval
    - Confidence level
    - Significance level
3. Referring to the sample of the IQs of anime-watching teens, construct
   confidence intervals for the population mean of IQs of anime-watching
   teens with the following confidence levels:
    - 90%
    - 99%
4. Read sections 9.1, 9.2, and 9.4 of *Introductory Statistics* or
   section 4.3 of [OpenIntro Statistics][ois].

[ois]: https://www.openintro.org/stat/textbook.php
