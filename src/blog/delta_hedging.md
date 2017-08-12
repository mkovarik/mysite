# Delta Hedging

**Hedging** is the act of taking two positions with negatively
correlated returns so as to minimize risk. If one position loses value,
the other position will likely gain value, thus minimizing possible
losses.

Delta hedging applies this idea to derivatives. Equity derivatives, for
example, have returns correlated with the underlying stock returns. If
they are positively correlated, as in the case with call options, we
long the derivative and short the stock. If certain assumptions are
made, then such a hedging strategy can eliminate risk entirely and
create arbitrage opportunities.

The caveat is that our two-factor portfolio must be continuously
rebalanced with an active hedging strategy. This is known as **dynamic
hedging**.

### Underlying Theory

Consider a portfolio consisting of longing an equity derivative and
shorting \\(\Delta (t)\\) units of the underlying security at time \\(t\\). The
hedging strategy corresponds to our choice of \\(\Delta (t)\\).

The value of \\(\Delta\\) that accomplishes this is:

\\[\Delta = \frac{\partial V}{\partial X}.\\]

Here, \\(V\\) is the value of the derivative and \\(X\\) is the value of the
underlying. Delta is a measure the sensitivity of the price of the
financial derivative with respect to the price of the underlying.

The value \\(\Pi\\) of the portfolio is thus

\\[\Pi = V - \Delta \cdot X.\\]

Suppose that the dynamics of \\(X(t)\\) is specified as a drift diffusion
process:

\\[dX = \mu dt + \sigma dW.\\]

Here, \\(W(t)\\) is a Wiener process. And \\(\mu\\) and \\(\sigma\\) are stochastic
processes describing the drift and diffusion of \\(X\\), respectively.

By Ito's lemma:

\\[d \Pi = \mathcal{L} V dt + \sigma \left(\frac{\partial V}{\partial X}
- \Delta \right) dW,\\]

where

\\[\mathcal{L} = \partial_t + \frac{\sigma^2}{2} \partial_{X X}.\\]

The portfolio is fully hedged when \\(\Pi\\) grows at the risk-free rate
\\(r\\): \\(d \Pi = r \Pi dt\\). The lack of a diffusion term indicates that
indeed \\(\Delta = \partial V / \partial X\\) is the correct choice.

The other hedging condition is that

\\[\mathcal L V = r (V - \Delta \cdot X).\\]

This is a generalization of the Black-Scholes PDE.

### Synthetic Derivatives

In general, a hedging strategy for a financial derivative also provides
a way to create that derivative synthetically. This is done by creating
a **replicating portfolio** that has the same value as the financial
derivative.

The fully hedged ("delta neutral") portfolio \\(\Pi\\) has the same value
process as a bank account with interest rate \\(r\\). So let \\(B\\) be the
value of the bank account. Then

\\[V = B + \Delta \cdot X.\\]

So a financial derivative may be synthetically replicated by having
\\(\Delta\\) units of the underlying plus some bank account.

This fact can be used to price derivatives. Suppose the underlying is a
non-dividend paying stock whose dynamics is of an exponential Brownian
motion with drift \\(\mu_0\\) and volatility \\(\sigma_0\\).

The Black-Scholes formula asserts that the fair value of a European call
option with expiry \\(T\\) and strike \\(K\\) is given by

\\[V(t) = X(t) \Phi (d_+) - e^{-r (T-t)}K \Phi (d_-),\\]

where \\(\Phi\\) is the standard normal cumulative distribution function and

\\[d_{\pm} = \frac{\log \frac{e^{r(T-t)} X(t)}{K} \pm \frac{1}{2}
\sigma^2 (T-t)}{\sigma \sqrt{T-t}}.\\]

It follows that

\\[\begin{aligned}
\Delta (t) &= N(d_+). \\\\
B(t)       &= - e^{-r(T-t)} K N(d_-).
\end{aligned}\\]