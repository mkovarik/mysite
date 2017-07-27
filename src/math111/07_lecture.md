# July 17

### Inference for two samples

In the previous week, we discussed hypothesis testing for one population
mean. The null hypothesis was of the form \\(\mu = \mu_0\\). The
alternative hypothesis was then one of the following:

1. \\( \mu < \mu_0 \\) (left-tailed)
2. \\( \mu > \mu_0 \\) (right-tailed)
3. \\( \mu \neq \mu_0 \\) (two-tailed)

This week, we discuss hypothesis testing for multiple population means.
Today and tomorrow, we deal with two populations. Denote their means as
\\( \mu_1 \\) and \\( \mu_2 \\). The null hypothesis we will consider is

\\[ H_0 : \mu_1 = \mu_2. \\]

The alternative hypothesis \\( H_A \\) will then be one of the following:

1. \\( \mu_1 < \mu_2 \\) (left-tailed)
2. \\( \mu_1 > \mu_2 \\) (right-tailed)
3. \\( \mu_1 \neq \mu_2 \\) (two-tailed)

The hypothesis test is a form of t-test. That is, a t-statistic must be
calculated in order to determine the p-value.

We can think of the null hypothesis \\( \mu_1 = \mu_2 \\) as being written
as \\( \mu_1 - \mu_2 = 0 \\). The "point estimator" for the difference
of population means is the difference of sample mans: \\(\bar x_1 -
\bar x_2\\).

The "null value" for the hypothesis test \\( \mu_1 - \mu_2 = 0 \\) is zero.
Thus the t-statistic for a two sample test is given as:

\\[ t \text{-statistic} = \frac{\bar x_1 - \bar x_2}{s_{\bar x_1 -
\bar x_2}}. \\]

Here, \\(s_{\bar x_1 - \bar x_2} \\) is the sample standard error for the
difference of sample means. The p-value corresponding to the t-statistic
is calculated in the exact same way as last week.

However, there are two differences:

1. The calculation of the standard error \\( \sigma_{\bar x_1 - \bar x_2}
   \\). can be tricky.
2. The calculation of the number of degrees of freedom can also be tricky.

### Paired data

Today, we consider two populations that are **paired**. That is, each
observation in one population corresponds to exactly one other population
in the other population. I like to think of each observation as not being
the numbers themselves, but as a coordinate point containing these numbers.

Here are some cases where data is naturally paired:

* Prior to a test, an instructor asks her students what grade they *think*
  they will earn on the test. Then she compares it with the grades they
  *actually earned* to see if there is a difference.
* To determine if global warming is occuring, scientists set up temperature
  sensors at various locations. They then compare the readings of the sensors
  one year with the readings of the sensors the next year.
* To determine if there is a household wage gap, the wages of husbands are
  compared with that of their wives.
* In a study of Hollywood sexism, the ages of actors portraying male
  characters are compared with the ages of actors portraying their female
  love interests.

It is not always the case that two populations are paired. Tomorrow, we
consider the case of when they are independent.

### Inference for paired data

Inference for paired data is really simple and straightforward. The first
thing we need to do is calculate the *difference* of each observation. We
denote \\( d \\) as the random variable representing the population of
such differences.

In a spreadsheep application, this may look like the following

<table>
  <tr>
    <td>Observation</td>
    <td>\( x_1\)</td>
    <td>\( x_2\)</td>
    <td>\(d\)</td>
  </tr>
  <tr>
    <td>1</td>
    <td>42</td>
    <td>31</td>
    <td>11</td>
  </tr>
  <tr>
    <td>2</td>
    <td>34</td>
    <td>35</td>
    <td>-1</td>
  </tr>
  <tr>
     <td>\(\vdots\)</td>
     <td>\(\vdots\)</td>
     <td>\(\vdots\)</td>
     <td>\(\vdots\)</td>
  </tr>
  <tr>
    <td>\(n\)</td>
    <td>33</td>
    <td>31</td>
    <td>2</td>
  </tr>
</table>

It turns out that the following equation is true:

\\[ \bar d = \bar x_1 - \bar x_2. \\]

As a result:

\\[\begin{aligned}
\sigma_{\bar x_1 - \bar x_2}
&= \sigma_{\bar d} \\\\
&= \sigma_d / \sqrt n \\\\
\end{aligned}\\]

The t-statistic (\\( df = n - 1\\)) is then given by

\\[ t \text{-statistic} = \frac{\bar d}{s_d / \sqrt n}. \\]

If \\( n \\) were large enough, then the t-statistic can be thought of as
a z-statistic.

Two-mean inference of paired data reduces to a one-mean inference of the
differences. As a result, the assumptions and methods learned in the
previous week apply. For example, it is assumed that \\(d \\) is
approximately normal or \\( n \\) is large for the t-statistic to hold.

### Homework (Due July 18)

[Solutions](static/hw5sol.pdf).
1. **Extra Credit.** The file [paired_data.csv](static/paired_data.csv) contains
   100 paired observations of two samples.
    - Using technology (either coding or using a spreadsheet application),
      calculate the sample mean and standard deviation of the differences.
    - *Hint.* If you use [LibreOffice Calc][LOCalc]. the function
      `AVERAGE` calculates the sample average and the function `STDEV`
       calculates the sample standard deviation. I think that these functions
       work similarly with Microsoft Excel. You can even
       do the full t-test in one step with the `TTEST` function.
    - If you do this problem using spreadsheets, please email me the
      spreadsheet prior to class tomorrow. If you do with problem with coding,
      you may print out your code.
    - Do this problem on your own. Submitting another person's
      code/spreadsheet is considered plagiarism. If you get help with this
      problem, indicate who helped you and the extent of that help.
2. Do exercises 5.19(d) and and 5.21(a) of [OpenIntro Statistics][ois] 
3. In preparation for tomorrow's lecture, read sections 10.1, 10.2 and
   10.3 of *Introductory Statistics* or section 5.3 and 5.4 of *OpenIntro
   Statistics*. Review the notion of statistical power.

[ois]: https://www.openintro.org/stat/textbook.php
[LOCalc]: https://www.libreoffice.org/discover/calc/
