# August 14

### Case study: the gendered wage gap

Working men in America make more money than working women in America.
This is an undeniable fact. The question, however, is what is the
*cause* of the gendered wage gap?

Perhaps it is due to discrimination by employers. Perhaps it is due
to different choices among men and women (field of work, educational
choices, child rearing, etc.). The goal of today's lecture is not
to answer any of these questions, but rather to provide a statistical
framework for which this and similar questions may be answered,

### Multilinear regression

The linear regression model discussed in week 4 can be written concisely
as

\\[y | x \sim N(\beta_0 + \beta_1 x, \sigma^2).\\]

This model allows one to predict the response variable \\(y\\) given a
single predictor variable \\(x\\). We can think of \\(y\\) as being
representive of wages, and \\(x\\) as somehow being representative of
gender. Then \\(\beta_1 \neq 0\\) would indicate some sort of gendered
wage gap.

This sort of analysis is insufficient if we wish to determine the
*source* of the wage gap, instead of merely determining that such a
wage gap *exists*. Instead, we want to keep track of multiple predictor
variables: gender, education, experience, hours worked, etc.

In statistics, this can be performed with a **multilinear regression**:

\\[y | x \sim N(\beta_0 + \sum_{i=1}^{k} \beta_i x_i, \sigma^2).\\]

Here, \\(x_1,\ldots,x_k\\) are the predictor variables that we are
trying to take into account. Following the least squares criterion,
the **sample regression hyperplane** will then be of the form:

\\[\hat y = b_0 + b_1 x_1 + \ldots + b_k x_k. \\]

This equation can be used to predict the response variable \\(y\\)
conditioned on the \\(k\\) predictor variables. Calculating the
regression hyperplane is very difficult to do by hand, so we let
a computer do the dirty work.

A goal of statistical modeling is to create reliable predictions.
And the reliability of these predictions can be quantized with the
coefficient of determination (\\(r^2\\)). Larger \\(r^2\\) values
means smaller prediction intervals. And *increasing the number of
predictor variables increases the* \\(r^2\\).

The apparent conclusion is to include as many variables as possible
into the regression equation. It turns out that this is a bad idea.
Complicated models tend to do worse than simple models. This is due
to the phenomena of **overfitting**. Overfitted models may have a low
SSE and high \\(r^2\\), but poor predicative power.

One way to overcome overfitting is to adjust the value of \\(r^2\\) so
as to penalize large values of \\(k\\):

\\[\text{adjusted} r^2 = 1 - (1-r^2)\frac{n-1}{n-k-1}.\\]

### Nonlinearity

It may be wise to not let \\(y\\) to represented actual wages. Instead,
it makes sense to do something like the following:

\\[y = \log (\text{wages}).\\]

This is so that a linear model makes sense. Increasing a predictor variable
by a fixed amount will in turn increase \\(y\\) by a fixed percentage. Of
course, one can argue that such a model is no longer linear as the relationship
between wages and the predictor variables (gender, experience, education, etc.)
is exponential/logarithmic.

Nonlinear transformations can also be done of the predictor variable. For example,
consider the following model:

\\[y | x \sim N(\beta_0 + \beta_1 x + \beta_2 x^2, \sigma).\\]

This is a **quadratic regression model**. Obviously, it is nonlinear because of the
\\(x^2\\). However, define \\(z_1 = x\\) and \\(z_2 = x^2\\). Then the population
regression equation can be written as \\(y = \beta_0 + \beta_1 z_1 + \beta_2 z_2\\).
And this is linear!

The morale of this story is that linear regression models actually include models that
can be thought of as "nonlinear".

### Categorical predictors

In performing linear regression, some of the predictor variables may be
categorical. This is most obviously the case with gender, which is obviously not
numerical. We may think of gender as taking three values: male, female, and nonbinary.
How does one plug in "female" into an equation?

One way to do this is by using "indicators" as random variables. These are random variables
that take the value of 1 or 0. For example, the indicator variable corresponding to male
would evaluate to 1 for each male worker and 0 for each non-male worker. Similarly, there
are indicator variables for "female" and "nonbinary".

If we think of "male", "female", and "nonbinary" as mutually exclusive, then we should only
include two of these three variables. If we don't, it turns out that the math will not work
out. This would result in "colinear predictors", which is akin to dividing by zero. If we
further assume that most people are either male or female, it may be wise to only take into
account one indicator variable.

For example, we may have a single variable for gender, which evaluates to 1 for men and 0
for non-men. Or perhaps 1 for women and 0 for non-women.
