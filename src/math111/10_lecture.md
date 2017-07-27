# July 20

### Definition of MSTR and MSE

We recall that the definition of the F-statistic is

\\[ F\text{-statistic} = \frac{MSTR}{MSE}. \\]

Here, MSTR (treatment mean square) measures the variance between the
groups. And MSE (error mean square) measures the variance within the
groups. These notions make sense intuitively. However, we have yet to
appropriately define these quantities. We do so in this lecture.

In general, the *mean square* (MS) is the *sum of squares* (SS) divided by
the degrees of freedom (df):

\\[ \text{mean square} = \frac{\text{sum of squares}}{\text{degrees of freedom}}.\\]

For the treatment mean square, this means that

\\[ MSTR = \frac{SSTR}{k-1}.\\]

Here, SSTR is the **treatment sum of squares**. Similarly, the error mean square
is defined as

\\[ MSE = \frac{SSE}{n - k}. \\]

Here, SSE is the **error sum of squares**. SSTR and SSE are defined as follows:

\\[\begin{aligned}
SSTR &= \sum n_j (\bar x_j - \bar x)^2 \\\\
SSE &= \sum (n_j - 1) s_j^2.
\end{aligned}\\]

Here:

* \\(n_j\\) is the sample size of the \\(j\\)th population.
* \\(\bar x_j \\) is the sample mean of the \\(j\\)th population.
* \\(\bar x\\) is mean of all observations (sometimes called the **grand
  mean**). It can be calculated from the individual sample means by a
  weighted average:
  \\[\bar x = \frac{\sum n_j \bar x_j}{n}.\\]
  (Recall that \\(n = \sum n_j \\).)
* \\(s_j\\) is the sample standard deviation.


The SSTR can be thought of as a measure of how different the sample means are
from the grand means. Thus MSTR can be thought of as a measure of variance
between the groups. And the SSE can be thought of as a measure of how different
the observations are from their own sample mean. Thus SSE is a measure of variance
within the groups.

### ANOVA calculations from summary statistics

Calculating the aforementioned quantities is easy if sample statistics are provided.
The sample statistics need only include the values of  \\(n_j\\), \\(s_j\\), and
\\(\bar x_j\\) for each population.

For example, suppose we are interested in the relationship between one's favorite
book genre and their incomes. We consider Sci-Fi, romance, and nonfiction. An
experiment is performed and the summary statistics are as follows:

<table>
  <tr>
    <td></td>
    <td>Sci-Fi</td>
    <td>Romance</td>
    <td>Nonfiction</td>
  </tr>  <tr>
    <td>Sample Size</td>
    <td>12</td>
    <td>7</td>
    <td>4</td>
  </tr>  <tr>
    <td>mean</td>
    <td>$36,400</td>
    <td>$32,900</td>
    <td>$39,700</td>
  </tr>
  <tr>
    <td>stdev</td>
    <td>$8,600</td>
    <td>$8,200</td>
    <td>$9,100</td>
  </tr>
</table>

The sum of squared errors is then calculated as

\\[\begin{aligned}
SSE &= \sum (n_j - 1) s_j^2 \\\\
&= (12 - 1)(\$8600)^2 + (7 - 1)(\$8200)^2 + (4 - 1)($9100)^2 \\\\
&\approx 1,465,000,000.
\end{aligned}\\]

(Note: the units of this result is in *squared US Dollars*, whatever
that means.)

To calculate the treatment sum of squares, we first calculate the
grand mean:

\\[\begin{aligned}
\bar x &= \frac{\sum n_j x_j}{n} \\\\
&= \frac{12($36400) + 7($32900) + 4($39700)}{12 + 7 + 4} \\\\
&\approx \$35908.
\end{aligned}\\]

The treatment sum of squares is therefore:

\\[\begin{aligned}
\bar x &= \sum n_j (\bar x_j - \bar x)^2 \\\\
&= 12 (\$36400 - \$35908)^2 + 7(\$32900 - \$35908)^2 + 4(\$39800 - \$35908)^2 \\\\
&\approx 127,000,000
\end{aligned}\\]

The mean squares are then calculated as

\\[\begin{aligned}
MSE &= \frac{SSE}{n-k} \\\\
&= \frac{1465000000}{23-3} \\\\
&= 73,250,000 \\\\
MSTR &= \frac{SSTR}{k - 1} \\\\
&=  \frac{127000000}{2}\\\\
&= 63500000.
\end{aligned}\\]

The F-statistic (df = (2,20)) is therefore

\\[\begin{aligned}
F\text{-statistic}
&= \frac{MSTR}{MSE} \\\\
&= \frac{63500000}{73250000} \\\\
&= 0.867.
\end{aligned}\\]

Suppose we are trying to test if one's favorite genre has any effect on
income. Assuming the conditions for ANOVA testing hold, the p-value
corresponding to this F-statistic is about 43%. Since this is large, we
cannot conclude that one's favorite genre has any effect one's income.

The p-value was calculated with technology. In the R programming language:

```r
> 1 - pf(0.867, 2, 20)
[1] 0.4354149
```
The results of our calculations (sans the p-value) can be organized into
an **ANOVA source table**:

<table>
  <tr>
    <td>Source</td>
    <td>SS</td>
    <td>df</td>
    <td>MS</td>
    <td>F</td>
  </tr>
  <tr>
    <td>Treatments</td>
    <td>127,000,000</td>
    <td>2</td>
    <td>63,500,000</td>
    <td>0.867</td>
  </tr>
  <tr>
    <td>Error</td>
    <td>1,465,000,000</td>
    <td>20</td>
    <td>73,250,000</td>
    <td></td>
  </tr>
  <tr>
    <td>total</td>
    <td>1,592,000,000</td>
    <td>22</td>
    <td></td>
    <td></td>
  </tr>
</table>

### ANOVA calculations from scratch

Suppose you were given the sample data without sample statsitcs. ANOVA
may be done simply by calculating the sample statistcs (the \\(\bar
x_j\\)s and \\(s_j\\)s) and then performing the above procedure. However,
this can be tedious.

So now we focus on some "shortcuts" to calculating ANOVA from scratch.
Prior to filling the ANOVA source table, the following should be
precalculated:

* The total number of observations \\(n = \sum n_j \\).
* The totals \\(T_j\\) of each sample.
* And the sum of squares \\(\sum x_i^2 \\) of all observations. This can
  be annoying to calculate.

Note that the index \\(j\\) is for the treatments and index \\(i\\) is for
the individual observations.

The treatment sum of squares can be rewritten as

\\[SSTR = \sum (T_j^2 / n_j) - \frac{1}{n} \left(\sum T_j\right)^2.\\]

This is easy to calculate once the sample totals \\(T_j\\) are calculated.

The next step is to calculate the **total sum of squares**

\\[SST = \sum x_i^2 - \frac{1}{n} \left(\sum T_j\right)^2. \\]

The second term here is the same term calculated on SSTR, so there is no
need for recalculation.

The sum of squared errors can then be calculated as

\\[SSE = SST - SSTR.\\]


### Homework (Due July 24)

1. **Extra Credit.** Prove the following equation:
   \\[\sum n_j (\bar x_j - \bar x)^2 =  \sum (T_j^2 / n_j) - \frac{1}{n}
      \left(\sum T_j\right)^2.\\]
   Do *not* assume that the formulas given for the SST, SSTR, or SSE are
   correct.
2. Consider the following sample statistics concerning samples from
   thee groups:
   
   <table>
     <tr>
       <td></td>
       <td>Group 1</td>
       <td>Group 2</td>
       <td>Group 3</td>
     </tr>
     <tr>
       <td>size</td>
       <td>3</td>
       <td>4</td>
       <td>3</td>
     </tr>
     <tr>
       <td>mean</td>
       <td>8</td>
       <td>10</td>
       <td>13</td>
     </tr>
     <tr>
       <td>stdev</td>
       <td>4</td>
       <td>\(\sqrt 8\)</td>
       <td>\( \sqrt 3 \)</td>
     </r>
   </table>
   
   Construct an ANOVA source table to find the F-statistic. Then use
   Table VIII to find an interval for the p-value for a one-way
   ANOVA assuming the assumptions for running an ANOVA hold.
3. Referring to the homework assigned yesterday, calculate the
   MSTR and MSE from scratch.
4. Study for Test 1, which will be held on Monday, July 4th. This
   test is worth 15% of your final grade.