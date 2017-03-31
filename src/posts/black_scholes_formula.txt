---
title: "Black-Scholes Formula"
category: Finance
---

In the previous post, we calculated $\mathbf{E} [(X(T) - K)^{+}]$, the
expected payoff of a call option,by conducting many simulations and
averaging the results. This method, called Monte Carlo, gave a slowly
convergent approximation to the truth.

However, if we know the exact distribution of $X(T)$, then we may
compute the expected payoff by integration:
$$\mathbf{E}[(X(T) - K)^{+}] = \int_{K}^{\infty} (x - K) \rho(x) dx.$$
Here, $\rho$ is the probability density function of $X(T)$.

To calculate $\rho (x)$, we assume that $X(T)$ is [log-normal][]:
$$\log \frac{X(T)}{X(0)} = \left( \mu - \frac{1}{2} \sigma^{2} \right) T
+ \sqrt{T} \sigma Z,$$
where $Z$ is a standard normal variable. When this is the case, then
it can be shown
$$\int_{K}^{\infty} (x - K)^{+} \rho (x) dx = F N(d_{+}) - K N(d_{-}),$$
where $N$ is the cumulative distribution function of the standard
normal, $F = e^{\mu T} X(0)$ is the $T$-[forward price][] of the
underlying, and
$$d_{\pm} = \frac{\log \frac{F}{K} \pm \frac{1}{2} \sigma^{2} T}{\sigma
\sqrt{T}}.$$
The equation
$$\text{expected call option payoff} = F N(d_{+}) - K N(d_{-}).$$
is known as the [Black-Scholes formula][] (or at least an equivalent
formulation of it), and is the most famous result in quantitative
finance.

To calculate the present value of a call option, we discount the
expected call option payoff by multiplying the discounting factor
$e^{-r T}$, where $r$ is the risk-free interest rate (in practice,
either LIBOR or OIS).

Derivation
----------

The derivation of the Black-Scholes formula is straightforward,
involving only basic calculus and probability theory. But it is somewhat
messy.

We first note that

$$\begin{aligned}
\mathbf{E} \left[ (X(T) - K)^{+} \right]
&= \int_{K}^{\infty}(x - K) \rho (x) dx \\
&= \int_{K}^{\infty} x \rho (x) dx - K \int_{K}^{\infty} \rho (x) dx.
\end{aligned}$$

So the calculation of the expected call option payoff reduces to the
evaluation of two integrals.

Instead of calculating $\rho (x)$ directly, we instead consider $\phi
(x)$, the probability density of the standard normal.

We note that $X(T) > K$ is equivalent to $Z > - d_-$,
therefore,
$$\begin{aligned}
\int_{K}^{\infty} \rho (x) dx
&= 1 - \int_{-d_-}^{\infty} \phi (z) dz \\
&= 1 - N(-d_-) \\
&= N(d_-).
\end{aligned}$$

The other integral is a little more involved:
$$\begin{aligned}
\int_{K}^{\infty} x \rho (x) dx
&= \int_{- d_-}^{\infty} X(0) \exp \left( \mu T - \frac{1}{2} \sigma^2
T + \sigma \sqrt{T} z \right) \phi (z) dz. \\
&= X(0) e^{\mu T} \frac{1}{\sqrt{2 \pi}} \int_{-d_-}^{\infty} \exp
\frac{- (z - \sigma \sqrt{T})^2}{2} dz \\
&= X(0) e^{\mu T} \frac{1}{\sqrt{2 \pi}} \int_{- d_{+}}^{\infty} \exp
\frac{- y^2}{2} dy \\
&= X(0) e^{\mu T} N(d_+).
\end{aligned}$$

Here, we made a change of variable $y = z - \sigma \sqrt{T}$.

From this derivation, we learned that $N(d_-)$ is the probability that
the call option expires in the money (X(T) > K).

Put Option Pricing
------------------

Here is a fun fact:

> Owning one unit of a European call option is equivalent to owning one
> unit of a European put option along with one unit of a forward
> contract, provided that all three instruments have the same
> underlying, expiration, and strike.

Denote that the price of the underlying at expiry $T$ as $X(T)$. And
denote the strike as $K$. If $X(T) > K$, then the payoff of the call
option is $X(T) - K$, while the put option is worthless. If $X(T) < K$,
then the payoff of the put option is $K - X(T)$, while the call option
is worthless. In either case, the forward contract is worth a value
$X(T) - K$ at expiry.


Situation  Call Option  Put Option  Forward Contract
---------  -----------  ----------  ----------------
$x > K$    $X(T) - K$      0        $X(T) - K$
$x < K$    0            $K - X(T)$  $X(T) - K$

It is clear that the payoff of a portfolio consisting of a put option
and a forward option is equal to that of a portfolio consisting of just
a call option, provided that the underlyings, expirations, and strikes
all match up.

Since these portfolios are guaranteed to have the same value at
expiration, they should have the same value at all times prior to
expiration. If $r$ is the risk-free interest rate, then the present
value of the forward contract is $e^{-r T}(F -K)$. As a
result: $$\text{call option PV} = \text{put option PV} + e^{-r T}(F - K)
.$$
This formula is known as [put-call parity][]. If we the value of a given
call option, we immediately know the value of the corresponding put
option, and *vice versa*.

Using Black-Scholes:
$$\begin{aligned}
\text{put option PV}
&= \text{call option PV} - e^{-r T}F + e^{-r T} K \\
&= e^{-rt}[(1-N(d_-))K - (1-N(d_+))F] \\
&= e^{-rt}[N(-d_-))K - N(-d_+)F].
\end{aligned}$$

Here, we used the identity $N(-x) = 1 - N(x)$.

[log-normal]: https://en.wikipedia.org/wiki/Log-normal_distribution
[forward price]: https://en.wikipedia.org/wiki/Forward_price
[Black-Scholes formula]: https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model#BSFormula
[put-call parity]: https://en.wikipedia.org/wiki/Put%E2%80%93call_parity
