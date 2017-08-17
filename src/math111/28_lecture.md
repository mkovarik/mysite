# August 15

### ANOVA == linear regression

Suppose we wish to determine if there is a relationship between
political affiliation and income. We might collect income data from
Republicans, Democrats, and Independents. We then evaluate the
hypothesis that the population means are unequal using an F-test:

\\[F = \frac{\text{varation between groups}}{\text{variation within groups}}.\\]

If F is large, then we may conclude that Democrats, Republicans, and
Independents have different incomes on average.

Another way to perform this analysis is to use regression with dummy
variables. Pool the observations together. Let \\(x_1\\) be equal to 1
for Republicans and 0 otherwise. And let \\(x_2\\) be equal to 1 for
Democrats and 0 otherwise.  And let \\(y\\) denote one's income. And
consider the following linear model:

\\[E[y | x_1,x_2] = \beta_0 + \beta_1 x_1 + \beta_2 x_2.\\]

Note that

\\[\begin{aligned}
\mu_0 &= E[y | x_1 = 0,x_2 = 0] \\\\\
&= \beta_0 \\\\
\mu_1 &= E[y | x_1=1,x_2=0] \\\\
&= \beta_0 + \beta_1 \\\\
\mu_2 &= E[y|x_1=0,x_2=1] \\\\
&= \beta_0 + \beta_2
\end{aligned}\\]

Here, \\(\mu_0\\), \\(\mu_1\\), and \\(\mu_2\\) are the means of the
incomes of Independents, of Republicans, and of Democrats,
respectively.

These values are the same if and only if \\(\beta_1 = \beta_2 = 0\\).
In linear regression, this sort of null hypothesis would be evaluated
with an F-test. It turns out that the F-test, degrees of freedom, and
p-value one would obtain is the same as that for ANOVA.

In R, the `lm` function can be used for both linear regression and
ANOVA.

### Logistic regression

In the previous lecture, we discussed how predictor variables may be
binary (taking the values of 0 or 1). This is useful for when we wish
to calculate a numerical response from a categorical predictor.

But what if we wish for the response variable to be category? It turns
out that a linear regression is not an appropriate tool for this sort
of data. Instead, a **logistic regression** might be more appropriate.

When the response variable is categorical, the corresponding regression
model is called a **classifier** (at least in the parlance of machine
learning). Using such a model for prediction results in a category along
with a degree of confidence. This is unlike linear regression, where
the prediction is some continuous prediction interval.

In the logistic regression model, the response \\(y\\) takes a value of
either 1 or 0. Denote \\(p_i\\) as the probability of \\(y_i\\) taking the
value of 1 conditioned on the value of \\(x_i\\) (we assume there is one
predictor):

\\[p_i = P(y_i = 1 | x_i).\\]

In the logistic model, it turns out that

\\[p_i = \frac{1}{1+e^{-(\beta_0 + \beta_1 x_i)}}.\\]

The model parameters are \\(\beta_0\\) and \\(\beta_1\\). Since this is not
a linear regression, these model parameters are not calculated with the least
squares criterion. A different optimization model is used.

Note that \\(p_i\\) is a function of three things: the two parameters
\\(\beta_0\\) and \\(\beta_1\\) and the observed predictor \\(x_i\\). 

### Maximum likelihood estimation

Instead of minimizing the "sum of squared errors", we instead maximize the
"likelihood" of obtaining the observed result. In this case, likelihood and
probability are synonymous.

Let \\(L_i\\) be the likelihood corresponding the result obtained for
\\((y_i\\). If \\(y_i=1\\), then \\(L_i = p_i\\) and if \\(y_i = 0\\)
then \\(L_i = 1 - p_i \\). We may write

\\[L_i = p_i^{y_i} (1-p_i)^{1-y_i}.\\]

Assuming independence, the overall likelihood is given by (for \\(n\\)
observations):

\\[L = L_1 L_2 \ldots L_n. \\]

Note that this is a function of \\(\beta_0\\) and \\(\beta_1\\), which are
unknown. For computational purposes, it is useful to instead talk about the
**log-likelihood**:

\\[\begin{aligned}
\log L
&= \log (L_1 L_2 \ldots L_n) \\\\
&= \log L_1 + \log L_2 + \ldots + \log L_n \\\\
&= \sum \log L_i \\\\
&= \sum \log (p_i^{y_i} (1-p_i)^{1-y_i}) \\\\
&= \sum y_i \log p_i + (1-y_i) \log (1-p_i).
\end{aligned}\\]

This is again a function of the unknown \\(\beta_0\\) and \\(\beta_1\\). The
way we estimate these parameters is by maximizing \\(\log L\\) over all
possible \\(\beta_0\\) and \\(\beta_1\\). Computers can do this calculation
easily (using calculus-powered algorithms). The result is called a
**maximum likelihood estimator**.

Maximum likelihood estimation is one of the most powerful techniques in
statistical inference. It is something you may encounter if you take a
more advanced statistics course.