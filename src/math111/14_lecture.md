# July 26

### The \\(\chi^2\\) distribution

Today and tomorrow, we will be discussing \\(\chi^2\\)-tests. These
tests involve statistics that, under the null hypothesis, takes on the
\\(\chi^2\\)-distribution.

This distribution is similar to the F-distribution in that:

1. There is no left-tail (the cumulative distribution function is zero
   for negative inputs), and
2. It is right skewed.

Unlike the F-distribution, the \\(\chi^2\\) distribution has only one
number describing its degrees of freedom. Critical values for this
distribution is presented in Table VII in the handout.

### Goodness of fit test

Yesterday, we introduced categorical inference in the context of
Bernoulli trials. That is, each observation can take up to one of
two values. Today, we consider experiments where each observation can
take one of several values.

The observed proportion (also called the **relative frequency**) of each
category is the number of observed members in each category (the **observed
frequency**) divided by the total number of observations. For example, the
following table shows the relative and observed frequency of favorite
pizza toppings for a survey of 300 people:

<table>
  <tr>
    <td>Topping</td>
    <td>Observed frequency</td>
    <td>Relative frequency</td>
  </tr>
  <tr>
    <td>Pineapple</td>
    <td>120</td>
    <td>0.400</td>
  </tr>
  <tr>
    <td>Pepperoni</td>
    <td>95</td>
    <td>0.317</td>
  </tr>
  <tr>
    <td>Anchovy</td>
    <td>85</td>
    <td>0.283</td>
  </tr>
  <tr>
    <td>Total</td>
    <td>300</td>
    <td>1.000</td>
  </tr>
</table>

Are these three toppings equal in popularity. The sample data seems to
imply that pineapple is the most popular, while anchovy is the least
popular. But can the discrepency be due to randomness in the data?

One way to check is by using a **goodness-of-fit test**. In such a test,
we must specify a distribution of (relative) frequencies \\(p_1, p_2,
\ldots, p_k\\) for the population. These frequencies have to add up to 1.
The hypothesis that these are the correct frequencies becomes the null
hypothesis for the test. The alternative hypothesis being that the
null hypothesis is not true.

To evaluate these hypothese, we first calculate the **expected
frequencies** for each category. This is defined by the equation

\\[E_i = n_i p_i. \\]

If the null hypothesis is \\(p_1 = p_2 = \ldots = \frac{1}{k} \\). Then
it follows that \\(E_1 = E_2 = \ldots = n / k \\).

For example, suppose that the null hypothesis that all three pizza toppings
have equal popularity. This means that the proportions are all 1/3. And the
expected frequencies would be 100. However, for some problems, it is sensible
for the null hypothesis to assert a non-uniform distribution of frequencies.
It is assumed that all of the expected frequencies be greater than 5.


The test-statistic is given by

\\[\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}.\\]

The degrees of freedom is \\(k-1\\). And tthe p-value is given by the area
under the right-tail.

In the pizza example:

<table>
  <tr>
    <td>Topping</td>
    <td>\(O\)</td>
    <td>\(E\)</td>
    <td>\((O-E)^2 / E\)</td>
  </tr>
  <tr>
    <td>Pineapple</td>
    <td>120</td>
    <td>100</td>
    <td>4.00</td>
  </tr>
  <tr>
    <td>Pepperoni</td>
    <td>95</td>
    <td>100</td>
    <td>0.25</td>
  </tr>
  <tr>
    <td>Anchovi</td>
    <td>85</td>
    <td>100</td>
    <td>2.25</td>
  </tr>
</table>

The test-statistic is therefore

\\[\begin{aligned}
\chi^2 &= 4.00 + 0.25 + 2.25 \\\\
&= 6.50
\end{aligned}\\]

This statistic has 2 degrees of freedom. By Table VII, the p-value is
therefore between 2.5% and 5%. Using a commputer, it can be more
precisely calculated as 3.88%. So one can conclude fairly confidently
that not all pizza toppings have equal popularity.

To see which pizza toppings are more popular than others, pairwise
tests for population proportions may be done. A Bonferroni adjustment
to the significance level may have to be applied.

### Homework

1. Do exercise 6.41 of *OpenIntro Statistics*.
2. Read section 6.4 of *OpenInto Statistics* or section 13.4 of
   *Introductory Statistics*.