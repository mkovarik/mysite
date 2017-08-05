# August 02

### Extrapolation

![Source: XKCD](static/husbands.png)

(*Source: XKCD*)

One goal of statical modeling is to make predictions. If we have, for
example, a statical model for stock prices, we may attempt to predict
future stock prices. And investing based off of these predictions can
make us money.

In linear regression, we have two variables: the predictor \\(x\\) and
the response \\(y\\). And we often think of their relationship as being
causal: \\(y\\) depends on the value of \\(x\\). Specifically, they are
related via the equation

\\[y = \beta_0 + \beta_1 x + \text{some error}.\\]

Ignoring the error term (which is zero on average), this equation is
that of a line (the **population reg**). And plugging in values of
\\(x\\) gives values of the **population regression line**
\\(y\\).

Of course, the coefficents \\(\beta_0\\) and \\(\beta_1\\), so we make
due with their point estimators \\(b_0\\) and \\(b_1\\). The (sample)
regression line therefore has the form

\\[\hat y = b_0 + b_1 x.\\]

And under the least squares criterion, \\(b_0\\) and \\(b_1\\) can be
calculated from the sample data.

Plugging in a hypothetical value \\(x_p\\) for the predictor
(usually not part of the sample) will result in a
prediction \\(\hat y_p = b_0 + b_1 x_p\\) for the response variable. This
procedure is called **extrapolation**. Note that \\(\hat y_p \\) is
sometimes called the "conditional mean".

Of course, the extrapolated value for the response variable is partly
determined by the randomness in the sample. As such, it is useful to
report a (\\(1 - \alpha\\)) confidence interval for \\(\hat y_p\\):

\\[\hat y_p \pm t_{\alpha / 2} s_e \sqrt{\frac{1}{n} +
\frac{(x_p - \bar x)^2}{S_{xx}}}.\\]

The degrees of freedom for the above \\(t\\)-value is \\(df=n-2\\).

Here, \\(s_e\\) is the **standard error for the response/residuals**,
and is given by

\\[s_e = \sqrt{\frac{SSE}{n-2}}.\\]

This is an estimate for \\(\sigma\\), which is the conditional variance
of the response variable \\(y\\).

However, it is typically better to use the **prediction interval**:

\\[\hat y_p \pm t_{\alpha / 2} s_e \sqrt{1 + \frac{1}{n} +
\frac{(x_p - \bar x)^2}{S_{xx}}}.\\]

The prediction interval is larger than the confidence interval. The
conceptual difference between the prediction interval and the confidence
interval has to do with how randomness is factored in. The confidence
interval only considers the randomness due to sampling. However, in the
assumption of of regression inference, there is also randomness that
is inherent in the model. This is measured by the conditional response
variance \\(\sigma^2\\). Both sources of randomness (model randomness
and sampling randomness) are taken into account for the prediction
interval.

Note that the confidence interval provided is only true if the four
conditions for linear regression inference hold.

**WARNING.** Always be careful in making extrapolations
(or any data-driven prediction). Statistical models of reality are never
actually true. And the risks of extrapolating from an incorrect model
are greater than what is represented by a confidence interval. This is
called *model risk*.


### Correlation/regression t-tests

Suppose that the conditions for conducting linear regression inference
holds. We are often interested in whether \\(\beta_1\\) is positive
or negative. Other times, we are interested in if \\(\beta_1\\) is
statistically different from zero (otherwise \\(x\\) is not a reliable
predictor of \\(y\\)). These questions can be answered with a
**regression t-test**.

The null hypothesis for this test is always of the form \\(\beta_1 = 0\\).
The alternative hypothesis is either \\(\beta_1 < 0\\), \\(\beta_1 > 0\\),
or \\(\beta_1 \neq 0\\). The test statistic is given by

\\[t = \frac{b_1}{s_e/\sqrt{S_{xx}}}.\\]

Here, the degrees of freedom of this t-statistic is \\(n-2\\). This formula
comes from the fact that the standard error of \\(b_1\\) is
\\(\frac{\sigma}{\sqrt S_{xx}}\\).

Similary, one might be interested in the value of the **population linear
correlation coefficient** \\(\rho\\). This is also done with a t-test
(a **correlation t-test**). The null hypothesis is given by \\(\rho = 0\\)
with the alternative hypothesis

\\[t = \frac{r}{\sqrt{\frac{1-r^2}{n-2}}}.\\]

The degrees of freedom are again \\(n-2\\).

Correlation and regression t-tests are not fundamentally different than
any other t-tests thus encountered. Consider yourself lucky if you have
to conduct one during your test.


### Homework (Due August 03)

Increasing the price of a commodity typically decrease the sales of that
commodity. The file [widgets.csv](static/widgets.csv) contains market
prices (in US Dollars) and weekly sales of widgets by different vendors
in some online market.

1. Calculate the linear regression coefficients \\(b_0\\) and \\(b_1\\)
   as well as the correlation coefficient \\(r\\) and the
   coefficient of determination \\(r^2\\). Check your answer using
   technology.
2. Assume the conditions for linear regression inference hold. Predict
   the number of widgets you would sell if you were to start selling
   widgets for 90 USD.
3. Calculate a 90% prediction interval for the weekly sales given that
   the widget is sold for 90 USD. 
4. (**Extra Credit.**) Suppose each widget costs 45 USD to manufacture.
   At what price should you sell so as to maximize profit? What is
   a 90% prediction interval for the predicted profit?
