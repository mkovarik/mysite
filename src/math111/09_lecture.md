# July 19

### Omnibus testing with ANOVA

In previous lectures, we discussed the importance of testing only one
hypothesis test per sample. Testing multiple hypothesis tests can lead
to an inflation of Type I error inflation.

However, if we are careful, we *can* perform multiple hypothesis tests
without sacrificing the statistical validity of our results. This sort
of omnibus testing can be very powerful and useful, with entire books
and courses dedicated to the subject.

In this lecture, we introduce the massive subject of one-way **ANOVA**
(*Analysis of Variance*), which evaluates a hypotheses form:

\\[\begin{aligned}
H_0 &: \mu_1 = \mu_2 = \ldots \mu_k \\\\
H_A &: \text{not } H_0.
\end{aligned}\\]

Here, \\( \mu_j \\) is the mean of the \\(j\\)th population (also called
**group** or **treatment**) and \\(k\\) is the number of populations that
are being compared.

Suppose \\( k = 3 \\). Then \\( H_0 \\) simultaneously tests for
\\(\mu_1 = \mu_2\\), \\(\mu_2 = \mu_3 \\), and \\( \mu_3 = \mu_1 \\). It
is tempting to do a seperate t-test for each of these pairwise comparisons.
However, doing so inflates the Type I error rate (the number of false
positives is higher than expected). Pairwise testing is possible (with
modification), provided that ANOVA rejects the simultaneous \\(H_0\\).

As with all statistical tests, ANOVA relies on several assumptions:

1. The observations are independent.
2. The \\( k \\) samples are independent.
3. The variances of the \\( k \\) populations are equal (homoscedasticity).
4. Each sample must be approximately normal or the sample size must be
   large.

### F-tests

As with all hypothetical tests discussed thus far, the ANOVA procedure
requires one to calculate a sample statistic from the sample data. The
p-value is then calculated as the area under the tail(s) corresponding to
the distribution of the test statistic under the null.

In previous lectures, we used two types of test statistics: z-statistics and
t-statistics. These statistics take the distribution of the standard normal
and t-distribution, respectively.

ANOVA uses a different type of test statistic, the **F-statistic**. And under
the null hypothesis, this statistic takes the **F-distribution**.

Formally, the F-statistic in one-way ANOVA defined as:

\\[F = \frac{MSTR}{MSE}.\\]

Here:

* \\(MSTR\\) is the **treatment mean square**. It is a rough measure of the
  *variation between populations/treatments/groups*. In *OpenIntro Statistics*,
  this is instead denoted by \\(MSG\\). The degrees of freedom for the MSTR
  is \\(k-1\\).
* \\(MSE\\) is the **error mean square**. It is a rough measure for the
  *variation within the populations/treatments/groups*. The degrees of freedom
  for the MSE is \\(n - k\\). Here, \\(n\\) is the total number of observations.

Intuitively, the F-statistic is given by:

\\[
F = \frac{\text{variation between groups}}{\text{variation within groups}}.
\\]

The null hypothesis is rejected when \\(F\\) is large. That is, p-values are
calculated from right-tails. When the variation between the groups is large,
it is unlikely that they have equal means. However, this variation may be
explained by a large variation within the groups. So comparing these two
quantities with a ratio is intuitively correct.

The test-statistics corresponding to the right-tails of certain areas of the
F-distribution in Table VIII of the handout. Note that the F-distribution
requires specification for the degrees of freedom for the numerator
(\\(dfn = k - 1\\)) and the degrees of freedom for the denominator
\\(dfd = n-k\\).

The degrees of freedom of the F-distribution is written as an ordered pair
\\((dfn, dfd)\\). For example, consider doing a one-way ANOVA procedure with
12 observations split between 4 groups. Then the degrees of freedom for the
corresponding F-statistic is (3,8).

In the next lecture, we discuss how MSTR and MSE are calculated.

### Multiple comparisons

Suppose that an F-test concluded that the null hypothesis that
\\( \mu_1 = \mu_2 = \ldots = \mu_k \\) should be rejected. Then we can
conclude that at least one population has a mean different from the rest. However,
ANOVA does not specify which of these populations are different from the
rest.

One way of obtaining different populations mean is by using
**Tukey's multiple comparison method**. This is based off the
**q-distribution**. The q-distribution is specified with two parameters \\(\kappa\\)
and \\(\nu\\). In Tukey's method, \\(\kappa = k\\) and \\(\nu = n - k \\).

Suppose we want to compare the population means \\(\mu_i\\) and \\(\mu_j\\). Tukey's
method requires constructing the following interval:

\\[\bar x_i - \bar x_j \pm \frac{q_{\alpha}}{\sqrt 2} \cdot s \sqrt{\frac{1}{n_i} +
\frac{1}{n_j}}.\\]

If zero is *not* within this interval, then we can conclude that \\(\mu_i \neq \mu_j\\)
and with significance level \\(\alpha\\). In a sense, this interval acts
as a confidence interval with confidence level \\(1 - \alpha\\).

Note that \\(n_i\\) and \\(n_j\\) is the sample size of the ith and jth interval,
respectively. And \\( s = \sqrt{MSE} \\).

Another method is to use the **Bonferroni correction**. Here, one does a pairwise
pooled t-test for each pair of population means. However, one must adjust the
significance level for each test. If the significance level for the family of tests
is given by \\( \alpha \\). Then the significance level for each individual test
must be reduced to

\\[ \alpha^{\star} = \alpha / K,\\]

where \\(K = k(k-1)/2\\) is the number of hypothesis tests that will be performed.

### Homework (Due July 20)

Thee instructors (lets call them A, B, and C) all teach algebra at a local college.
Each of their classes have four students (equal sample sizes are not required
for ANOVA). And they all administer a common final. The grades of this final
are tabulated below:

<table>
  <tr>
    <td>A</td>
    <td>B</td>
    <td>C</td>
  </tr>
  <tr>
    <td>90</td>
    <td>68</td>
    <td>40</td>
  </tr>
  <tr>
    <td>80</td>
    <td>65</td>
    <td>85</td>
  </tr>
  <tr>
    <td>90</td>
    <td>70</td>
    <td>55</td>
  </tr>
  <tr>
    <td>95</td>
    <td>82</td>
    <td>70</td>
  </tr>
</table>

The MSTR (variation of grades between the classes) is about 714.6.
The MSE (variation of grades within the classes) is about 156.8.

We test the null hypothesis that \\( \mu_A = \mu_B = \mu_C \\) (grades are not
affected by the instructor) against the alternative hypothesis that the
population means are not all equal. Assume that the conditions for performing
a one-way ANOVA holds.

1. Calculate the F-statistic and its degrees of freedom.
2. Use table VIII to calculate a range of possible p-values. Would you reject the
   null hypothesis with 5% significance?
3. Consider the following family of hypotheses:
    - \\( \mu_A \neq \mu_B \\)
    - \\( \mu_B \neq \mu_C \\)
    - \\( \mu_C \neq \mu_A \\)
    
   Suppose we want a familywise significance level to be \\(\alpha = 0.05\\). What
   should the corrected significance level \\( \alpha^{\star} \\) that should be
   applied to each individual hypothesis? What method would you use to calculate
   the p-values for these hypotheses?
4. In preparation for tomorrow's lecture, watch [Khan Academy's videos][vids] on
   ANOVA.


[vids]: https://www.khanacademy.org/math/statistics-probability/analysis-of-variance-anova-library#analysis-of-variance-anova