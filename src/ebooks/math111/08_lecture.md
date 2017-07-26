# July 18

### Independent sampling

Yesterday, we discussed 2-population hypothesis tests for which the
obervations were paired. Today, we discuss 2-population inference with
independent sampling.

Recall that one of the conditions for performing a t-test is that the
observations must be independent. For 2-population inference, we still
require this condition on both samples. Moreover, we also assert that
the two samples also be independent. A result of this condition is that
the two sample means are independent random variables.

Let us review some notation:

<table>
  <tr>
    <td></td>
    <td>Population 1</td>
    <td>Population 2</td>
  </tr>
  <tr>
    <td>Mean</td>
    <td>\(\mu_1\)</td>
    <td>\(\mu_2\)</td>
  </tr>
  <tr>
    <td>Sample mean</td>
    <td>\(\bar x_1\)</td>
    <td>\( \bar x_2 \)</td>
  </tr>
  <tr>
    <td>Standard deviation</td>
    <td>\(\sigma_1\)</td>
    <td>\(\sigma_2\)</td>
  </tr>
  <tr>
    <td>Sample standard deviation</td>
    <td>\(s_1\)</td>
    <td>\(s_2\)</td>
  </tr>
  <tr>
    <td>Sample size</td>
    <td>\(n_1\)</td>
    <td>\(n_2\)</td>
  </r>
</table>

If the sampling is independent, then the sample means \( \bar x_1 \) and
\( \bar x_2 \) is independent. We recall that the variance of a sum of
independent random variables is the sum of the individual variances.
This means that the standard error \(\sigma_{\bar x_1 - \bar x_2}\)
satisfies the following equation:

\\[\begin{aligned}
\sigma_{\bar x_1 - \bar x_2}^2
&= \sigma_{\bar x_1}^2 + \sigma_{- \bar x_2}^2 \\\\
&= \sigma_{\bar x_1}^2 + \sigma_{\bar x_2}^2 \\\\
&= \frac{\sigma_1^2}{n} + \frac{\sigma_2^2}{n}.
\end{aligned}\\]

As a result, the standard error is given by:

\\[\text{standard error of } \bar x_1 - \bar x_2 =
\sqrt{\frac{\sigma_1^2}{n} + \frac{\sigma_2^2}{n}.}\\]

For the purpose of calculating the standard error, the population standard
deviations \\(\sigma_1\\) and \\(\sigma_2\\) is replaced by the sample
standard deviations \\(s_1\\) and \\(s_2\\).

The test statistic is then given by:

\\[\text{test statistic} =
\frac{\bar x_1 - \bar x_2}{\sqrt{s_1^2/n_1+s_2^2/n_2}}.\\]

This statistic is a t-statistic. But if \\(n_1\\) and \\(n_2\\) are large
enough, then it can be approximated as a z-statistic for the purposes of
calculating p-values.

### Calculating the degrees of freedom

The degrees of freedom \\(\Delta\\) for the aforementioned test statistic
is as follows (rounded down):

\\[\Delta = \frac{[s_1^2/n_1 + s_2^2/n_2]^2}{\frac{(s_1^2 / n_1)^2}{n_1 - 1}
+\frac{(s_2^2 / n_2)^2}{n_2 - 1}}.\\]

What a nasty formula! Note that this formula wasn't given in *OpenIntro
Statistics*. The procedure that they give was to set the degrees of freedom
to either \\(n_1 - 1\\) or \\( n_2 - 2\\), whichever is smaller. This is a
conservative estimate with a smaller-than-actual degrees of freedom. The
result is that the test statistic has fatter tails and larger p-values.

*Do not use this procedure*. While the formula of \\(\Delta\\) is somewhat
nasty, it is not intractable. Using the conservative estimate given in
*OpenIntro Statistics* will increase the rate of Type II errors (and thus
decrease the power of the test).

For calculating \\( \Delta \\) with a handheld calculator, I recommend
first calculating \\( s_1^2 / n_1 \\) and \\( s_2^2 / n_2 \\) and then
substitute these values into the formula.

### Homoscedasticity (pooled data)

The above formulas are designed to work when there is a possibility
that \\(\sigma_1 \neq \sigma_2 \\). This is called
**heteroscedasticity**, which is a fancy word for "unequal variances".
We may also use the term "non-pooled data".
However, suppose that we know that \\( \sigma_1 = \sigma_2 \\)
(**homoscedasticity**, or **pooled data**).

Then we may replace \\( s_1 \\) and \\( s_2 \\) in the test statistic
formulas by the **pooled sample deviation**:

\\[ s_p^2 = \frac{s_1^2 (n_1 - 1) + s_2^2 (n_2 - 1)}{n_1 + n_2 - 2}.\\]

One may think of \\(s_p^2\\) (the pooled variance) as a weighted sum of
\\(s_1^2\\) and \\(s_2^2\\) (the sample variances), with the weights being
proportional to the degrees of freedom.

The test statistic is then


\\[ \text{test statistic} =
\frac{\bar x_1 - \bar x_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}.\\]

The degrees of freedom for this t-statistic is \\(df = n_1 + n_2 - 2\\).
This is larger than the degrees of freedom \\(\Delta\\) for the nonpooled
test. As a result, the test statistic has skinnier tails, a smaller p-value,
and smaller Type II error rates (= larger statistical power).

The downside of using the pooled test is the homoscedasticity assumption
\\( \sigma_1 = \sigma_2 \\). This can be checked by comparing the sample
standard deviations \\( s_1 \\) and \\( s_2 \\). A general rule of thumb
is that if one isn't twice the other, then they are "close enough" to be
pooled.

### Homework

1. Do exercise 5.27(d) in [OpenIntro Statistics][ois] using both the
   pooled and nonpooled procedures.
2. <s>Read section 5.5 of *OpenIntro Statistics* or chapter 16 of
   *Introductory Statistics* (sans section 16.5) in preperation for the
   next two days of lecture. These readings cover ANOVA (analysis of
   variance).</s>

[ois]: https://www.openintro.org/stat/textbook.php