# August 01

### Administrata

Quizzes are worth 30% of the final grade. We had 12. We have about 9
remaining. The lowest three quiz grades are to be dropped. Extra
credit is then added.

To calculate the projected grade of each student, I used random
sampling with replacement to simulate future grades. From this, I
dropped the lowest three grades. I then multiplied each student's
accumulated extra credit by \\(\frac{21}{12}\\) to take into
account future extra credit opportunities.

This was done in code, of course:

```r
simulate_grade_total <- function(grades, ec) {
    simulated_grades <- sample(grades, 9, replace=TRUE)
    all_grades <- c(grades, simulated_grades) 
    dropped_grades <- sort(all_grades)[1:3]
    sum(simulated_grades) - sum(dropped_grades) + 21 / 12 * ec 
}
```

I did such simulations 500 times per student and got the following
results: 51, 61, 110, and 110. Note that the max grade is 108.

So everyone is either doing really well or really poorly with regards
to the quiz component of the grade. Bimodal distributions for grades
is common. However, the variance in quiz grades is not reflected in
the variance of the grades of the first test, for which the lowest
grade was a 17/20.

If high grades are again obtained for Test II and the final, I may
have to provide a curve so that the variance of the cumulative
quiz grades is more similar to that of the tests and final. There
are three curving methods that I am considering:

1. Drop 4-5 quiz grades instead of 3.
2. Use a square-root curve:
   \\[\text{curved grade} = \sqrt{\text{max grade} \times
   \text{raw grade}}\\]
3. More generally:
   \\[\text{curved grade} = (\text{max grade})^{\alpha} \times
   (\text{raw grade})^{1 - \alpha}.\\]

If there is high variance on  test II or the final, no curve
will be applied.

### More formulas

We recall the following three quantities:

\\[\begin{aligned}
S_{xx} &= \sum (x_i - \bar x)^2 \\\\
S_{xy} &= \sum (x_i - \bar x)(y_i - \bar y) \\\\
S_{yy} &= \sum (y_i - \bar y)^2.
\end{aligned}\\]

In problems given in this course, these values will often be provided
along with other sample statistics. This makes calculating other
statistics quite easy:

\\[\begin{aligned}
r   &= \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}} \\\\
b_1 &= \frac{S_{xy}}{S_{xx}} \\\\
b_0 &= \bar y - b_1 \bar x.
\end{aligned}\\]

These are quantities we learned yesterday. Let us learn of three more
quantities.

\\[\begin{aligned}
SST &= \sum (y_i - \bar y)^2 \\\\
&= S_{yy} \\\\
SSR &= \sum (\hat y_i - \bar y)^2 \\\\
&= \frac{S_{xy}^2}{S_{xx}} \\\\
SSE &= \sum (y_i - \hat y_i)^2 \\\\
&= SST - SSR.
\end{aligned}\\]

Here:

* SST is the **total sum of squares**, which is proportional to the
  sample variance of the response variable \\(y\\).
* SSR is the **residual sum of squares**. This measues the variation
  of the response variable as explained by the regression.
* SSE is the **error sum of squares**, which measures the variation
  of the response variable that cannot be explained from the regression.

The ratio \\(SSR / SST\\) can be used to describe what percentage of the
total variation of the response variable is due to the regression. As
it turns out:

\\[r^2 = \frac{SSR}{SST}. \\]

The quantity \\(r^2\\), the square of the linear correlation coefficient,
is sometimes called the **coefficent of determination**. If
\\(r^2 = 0.94\\), for example, then 94% of the variation of the response
variable can be explained by the linear regression on the predictor
variable \\(x\\).

### Assumptions for inference

We now assume that the "true relationship" between the response and
error variables are given by

\\[ y = \beta_0 + \beta_1 x + \text{true error term}. \\]

The response, predictor, and error term can all be thought of as
random variables. To perform statistical inference, assumptions must
be made. The first three assumption pertain to properties of the
response variable given that the predictor variable is known. This is
known as **conditioning**.

* **Linearity.** The mean of \\(y\\) conditioned on
  \\(x\\) is \\(\beta_0 + \beta_1 x\\).
* **Homoscedasticity.** The variance of \\(y\\) conditioned on \\(x\\)
  is not dependent on \\(x\\). We denote this variance as
  \\(\sigma^2\\)
* **Normality**. The distribution of \\(y\\) conditioned on \\(x\\)
  is normal. This assumption is 
* **Independence of observations.** The observations of \\(y\\) are
  mutually independent. The observations of \\(x\\) are mutually
  independent.

The first three assumptions may be written with the following expression:

\\[y | x ~ N(\beta_0 + \beta_1 x, \sigma^2). \\]

This is read as: \\(y\\) conditioned on \\(x\\) is distributed as a normal
random variable with mean \\(\beta_0 + \beta_1 x\\) and variance
\\(\sigma^2\\).

The assumptions are often rewritten in terms of the error terms instead of
the response variable. Indeed, the conditional distribution of the error
term should be the following given linearity/homoscedasticity/normality:

\\[\text{error} | x ~ N(0, \sigma^2). \\]

The error term is not observable. However, if \\(b_0\\) and \\(b_1\\)
are close to \\(\beta_0\\) and \\(\beta_1\\) (and they are if the
assumptions hold and the sample size is large), then the conditional
distribution of the residuals approaches the conditional distribution
of the errors.

Visual tests of the linear regression assumptions can be done by
analyzing the residuals (this is called **residual analysis**):

* **Linearty:** Create a scatterplot of the residuals \\(y_i - \hat _i\\)
  corresponding to the predictors \\(x_i\\). The sub sample of residuals
  corresponding to predictors lying on any given interval should have
  a sample mean of approximately zero.
* **Homoscedasticity:** Using the same scatterplot, check that the
  sample variances of any given sub sample of variances corresponding to
  a predictors lying on any given interval are constant.
* **Normality:** Create a Q-Q plot comparing the quantiles of the residuals
  against the theoretical quantiles of a standard normal distribution.
  The result should be linear.

### Homework (Due August 02)

Refer to the file [h11.csv](static/h11.csv), which tabulates values of
some predictor variable \\(x\\) and three possible response variables
\\(y_1\\), \\(y_2\\), and \\(y_3\\).

1. (**Extra Credit.**) Use technology to graph the scatterplot of each
   response variable against the predictor variable (you should have three
   scatterplots total). In each scatterplot, graph the line of best fit
   (as determined by the least squares criterion). And report the values for \\(b_0\\),
   \\(b_1\\), and \\(r^2\\) for each regression.
2. (**Extra Credit.**) Use technology to graph the scatterplot of the
   residuals with respect to the predictor. Use these scatterplots to
   determine if there are any violations of the correct specification
   or the homoscedasticity conditions.