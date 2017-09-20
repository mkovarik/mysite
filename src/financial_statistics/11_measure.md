# Probability Measures


Probability theory formalizes the notions of uncertainty and randomness.
The probability of an event (a collection of outcomes) measures the
degree of certainty that the event will actually occur. Certain events
occur with probability 1. Impossible events occur with probability 0.


## Sigma algebras

The result of a random process is an "outcome". The space of possible
outcomes forms a set \\(\Omega\\). For finite outcome spaces, it is
sufficient to simply assign a probability to each outcome.

For continuous outcome spaces, however, it is sensible to assign
probabilities instead to "events", which are sets of possible outcomes.
However, when \\(\Omega\\) is continuous, it is possible to construct
subsets with highly pathalogical properties (see the
[Banach-Tarski paradox][btwik]). It would be difficult to meaningfully
assign probabilities to such sets. It is not desirable to let a *any*
subset of \\(\Omega\\) be considered an event. Instead, events are
restricted to belong to some class \\(\mathcal{F}\\) of subsets of
\\(\Omega\\). This class should exclude pathaological subsets, but also
be large enough to accomodate the needs of probability.

Formally, \\(\mathcal F\\) must be a **sigma algebra** (sometimes called
a **sigma field**). That is, it must obey the following properties: 

1. \\(\Omega \in \mathcal F\\).
2. \\(\mathcal F\\) is closed under complementation:
   (\\(E \in \mathcal F \implies \Omega - E \in \mathcal F \\)).
3. \\( \mathcal F \\) is closed under countable unions:
   (\\(E_n \in \mathcal F \implies \bigcup_{n=1}^{\infty} E_n \in
   \mathcal F \\)).
4. \\(\mathcal F\\) is closed under countable intersections: \\(E_n \in
   \mathcal F \implies \bigcap_{n=1}^{\infty} E_n \in \mathcal F \\).

Note that by [De Morgan's laws][demorg], the first three properties
imply the fourth to be true. That is, the first three properties are
typically used as *axioms* of sigma algebras.

Sigma algebras are robust in that they allow for events to be combined
in many ways using "logic". To illustrate, suppose \\(E_1\\) and \\(E_2\\)
denote two events in some sigma-algebra. Then:

* The complement of an event consists of all outcomes *not* in the event.
  So \\(E_1^c\\) can be written as "not \\(E_1\\)".
* The intersection of two events consists of all outcomes occurring in
  *both* events. So \\(E_1 \cap E_2\\) can be written as "\\(E_1\\) and
  \\(E_2\\)".
* The union of two events consists of all outcomes occuring in one or
  both events. So \\(E_1 \cup E_2\\) can be written as as "\\(E_1\\)
  or \\(E_2\\)".

The following theorem, which is quite trivial to prove, is quite
useful for constructing sigma algebras:

**Theorem.** The intersection of any family of sigma algebras is
itself a sigma algebra. ■

This theorem allows one to construct a minimal sigma algebra satisfying
some property by taking the intersection of all sigma algebras
satisfying that property.

For example, let \\(T\\) be a topological space. Then \\(\mathcal B
(T)\\) denotes the smallest sigma algebra containing every open set of
\\(T\\). The members of this algebra are called **Borel subsets** of
\\(T\\).

The tuple \\(\Omega, \mathcal F\\) consisting of a set of "outcomes"
\\(\Omega\\) and a set \\(\mathcal F\\) of "events" forms a
**measurable space**.

## Probability Measures 

A **probability measure** over such a measurable space is a function
\\(P : \mathcal F \to [0,1] \\) satisfying the following two properties:

1. \\(P(\Omega) = 1\\)
2. If \\(E_1, E_2, \ldots \\) is a countable family of disjoint ("mutually exclusive") events,
   then
   \\[P \left(\bigcup E_n \right) = \sum P(E_n)\\]
  
Events that occur with probability 1 are said to occur **almost surely**.

Some immediate consequences of probability measures are as follows:

* \\(0 \leq P(E) \leq 1\\)
* \\(P(\Omega - E) = 1 - P(E)\\)
* \\(P(\emptyset) = 0\\)
* If \\( E_1 \subset E_2\\), then \\(P(E_1) \leq P(E_2\\)
* \\(P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2)\\)
  ("inclusion-exclusion")
* If \\(E_n \nearrow E \\), then \\(P(E) = \lim P(E_n)\\)



Here, \\(E_n \nearrow E\\) means that \\(E_n\\) is a subset of \\(E_{n+1}\\) for
all positive integers \\(n\\) and that \\(E = \bigcup E_n\\).

[demorg]: https://en.wikipedia.org/wiki/De_Morgan%27s_laws
[btwik]: https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox