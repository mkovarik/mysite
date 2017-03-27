---
title: Parameter Calibration
category: Finance
---

Consider a geometric Brownian motion $X(t)$. Its dynamics is defined
explicitly by the equation
$$X(t) = X(0) \cdot \exp \left( \mu t - \frac{1}{2} \sigma^{2}t + \sigma
W(t) \right).$$
As always, $W(t)$ is a Wiener process, $\mu$ is the drift parameter, and
$\sigma$ is the volatility parameter.

In order to do any practical analysis involving $X(t)$, one needs to
first know the values of $\mu$ and $\sigma$. One way to do so is
through statistical inference.

For example, we may know some past values of $X(t)$. This may be given
as a discrete time series $X(t_n) = X_n$ (for $n=0,\ldots,N$). Then
define (for $n \leq N-1$)
$$\begin{aligned}
R_n &= \log \frac{X_{n+1}}{X_{n}} \\
&= \left(\mu - \frac{1}{2} \sigma^2 \right)t + \sigma(W(t_{n+1}) -
W_{t_n}),\\
\Delta_{n} &= t_{n+1} - t_{n}.
\end{aligned}$$
The $R_{n}$'s are independent normal variables, each with mean $(\mu
- \frac{1}{2} \sigma^{2}) \Delta_n$ and variance $\sigma^{2} \Delta_n$.

Suppose that the time series data is collected at constant frequency.
That means that $\Delta_n = \Delta$. Then the $R_{n}$'s are not only
independent, but identical. Recalling basic statistics, this means that
the volatility parameter may be estimated by the equation
$$\begin{aligned}
\hat{\sigma}^{2} &= \frac{1}{(N-1) \Delta} \sum (R_n - \bar{R})^2, \\
\bar{R} &= \frac{1}{N} \sum R_n.
\end{aligned}$$
For the purposes of statistical estimation, it is good to know that
$\hat{\sigma}$ is asymptotically normal with mean 0 and variance
$$E[\hat{\sigma}^2] = \frac{2 \sigma^{4}}{N-1}.$$

The drift parameter may similarly be estimated by
$$\hat \mu = \frac{1}{2} \hat{\sigma}^2 + \frac{1}{\Delta} \bar R.$$

However, when $X(t)$ is the value process of some financial security, it
is common to set
$$\mu = \text{interest rate} + \text{cost of carry} -
\text{dividend yield}.$$

In performing estimations, one often only considers data from trading
days. This is because it is found that volatility is much lower on
non-trading days. Since stocks are traded 252 days a year, we often take
$\Delta = \frac{1}{152}$ and $X_{i}$ to be the closing or opening value
of the stock on the $i$th trading day.

A better method for 1-dim SDE's
-------------------------------

The problem with the previous method is that it only works when $X(t)$
is a geometric Brownian motion. It also assumes that its historical time
series is constant-frequency.

A better  method is to more generally consider the dynamics of $X(t)$ as
being defined by the SDE:
$$dX = f(t, X; \theta) dt + g(t, X; \theta) dW.$$
Here, $\theta$ is a vector of constant parameters.

In geometric Brownian motion ($dX = \mu X dt + \sigma X dW$), for
example, we have:
$$\begin{aligned}
\theta &= (\mu, \sigma), \\
f(t, x; \theta) &= \mu x, \\
g(t, x; \theta) &= \sigma x.
\end{aligned}$$

Given a time series realization $X(t_n) = X_n$ of $X$, one may replace
the SDE with a system of finite difference equations ($n \leq N-1$):
$$X_{n+1} - X_{n} = f(t, X_n; \theta) \Delta_n + g(t, X_n; \theta)
Z_n \sqrt{\Delta_n}.$$
Here, the $Z_n$'s are independent standard normal variables.

Notice that, conditioned on the knowledge of $X_{n}$, the value of
$X_{n+1}$ is a standard normal variable with mean $X_n + f_n \Delta_n$
(where $f_n = f(t, X; \theta)$) and variance $g_n^2 \Delta_n$ (where
$g_n = g(t, X_n; \theta)$). The conditional likelihood of $X_{n+1}$ is
given as
$$\begin{aligned}
\rho (X_{n+1} | X_{n}) &=
\phi(X_{n+1}, X_{n} + f_{n} \Delta_{n}, g_{n}^{2} \Delta_n), \\
\phi(x, \mu, \sigma^{2}) &= \frac{1}{\sigma^{2} \sqrt{2 \pi}}
\exp \left( - \frac{(x - \mu)^2}{2 \sigma^2} \right).
\end{aligned}$$

Because $X(t)$ is a [Markov process][], the [pseudolikelihood][] corresponding to
the time series $X(t_n) = X_n$ is then given by
$$\rho(X_0) \rho(X_{1} | X_{0}) \ldots \rho (X_{N} | X_{N-1}).$$
The first factor $\rho (X_{0})$, the unconditional liklihood of $X_{0}$
is often dropped because it is practically impossible to calculate.

Define the pseudo-log-likelihood function as
$$\begin{aligned}
L(\theta) &= \sum \log \rho (X_{n+1} | X_n) \\
&= -\frac{1}{2} \sum \log (2 \pi g_n \Delta_n) +
\frac{(X_{n+1} - X_n - f_n \Delta_n)^2}{g_n^2 \Delta_n}
\end{aligned}$$

The value of $\hat \theta$ that is defined such that $L(\hat \theta)$
is maximized will give an estimator for $\theta$.

For R programmers, the `Sim.DiffProc` package provides a function
(`fitsde`) that implements this method of parameter calibration.

[Markov process]: https://en.wikipedia.org/wiki/Markov_processhttps://en.wikipedia.org/wiki/Markov_process
[pseudolikelihood]: file:///home/michael/Projects/mysite/dest/posts/parameter_calibration.html
