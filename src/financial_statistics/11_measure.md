# Probability Measures

**Probability** is a measure of uncertainty. Events that are guaranteed to occur
are assigned a probability of 1. Events that are guaranteed not to occur are
assigned a probability of 0. Events that may or may not occur are assigned a
probability between 0 and 1. Higher probability indicate that the event is more
likely to occur.

### Probability spaces

It is important that we understand the sort of objects to which we assign
probabilities. Intuitively, we may envision a set \\(\Omega\\) of possible
"outcomes". For example, in rolling a six-sided die, the outcomes are:

\\[\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}. \\]

Assuming the die is fair, we may assign each of these outcomes a probability of
one-sixth.

Such a procedure is admissible if the collection of outcomes is finite. However,
this way of thinking is problematic for when \\(\Omega\\) is a continuum of
values. In such cases, it is typical that each outcome \\(\omega \in \Omega \\)
is assigned a probability of zero. But such an assignment cannot possibly yield
a complete description of randomness. So instead probabilities are assigned to
"measurable regions" in \\(\Omega\\).

More precisely, probabilities are assigned to *events* rather than outcomes. An
**event** is a collection of possible outcomes. Mathematically, it is a subset
of the outcome space \\(\Omega\\). But is not generally the case that any subset
of \\(\Omega\\) suffices as an event. Instead, a collection \\(\mathcal F\\) of
events is specified *a priori*.

The collection \\(\mathcal F\\) must satisfy the properties of a **sigma algebra**
(sometimes called a *sigma field*):

1. \\(\Omega \in \mathcal F\\).
2. \\(\mathcal F\\) is closed under complementation (\\(E \in \mathcal F
   \implies \Omega - E \in \mathcal F \\)).
3. \\( \mathcal F \\) is closed under countable union (\\(E_n \in \mathcal F
   \implies \bigcup_{n=1}^{\infty} E_n \in \mathcal F \\)).
4. \\(\mathcal F\\) is closed under countable intersection \\(E_n \in \mathcal F
   \implies \bigcap_{n=1}^{\infty} E_n \in \mathcal F \\).

Note that by [De Morgan's laws][demorg], the first three properties imply the fourth
to be true.

Properties 2 - 4 allow for one to construct new events using logic. For
example, let \\(A\\) and \\(B\\) be events. Then \\(\Omega - A\\) is the
event of \\(A\\) not occurring, \\(A \cap B\\) is the event of both
\\(A\\) and \\(B\\) occurring, and \\(A \cup B\\) is the event of at
least one of \\(A\\) or \\(B\\) occurring. The pair \\((\Omega, \mathcal
F)\\) is known as a **measurable space**.

The intersection of a (possibly uncountable) family of sigma-algebras is
itself a sigma algebra. It is therefore permissible to construct
sigma-algebras defined as the "smallest" sigma-algebra satisfying some
given property.

For example, let \\(T\\) be a topological space


### Probability Measures 

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

### Random variables

A **random variable** is a function of the form \\(X: \Omega \to
\bf{R}\\). A random variable is said to be **measurable** with respect
to the sigma-algebra \\(\mathcal F\\) if the preimage \\(X^{-1} (B)\\)
of every Borel subset \\(B \subset \bf{R}\\) belongs in \\(\mathcal
F\\):

\\[B \in \mathcal B (\mathbf R) \implies X^{-1}(B) \in \mathcal F.\\]

\\(X\\) is then said to be \\(\mathcal F\\)**-measurable**. We denote
\\(\sigma (X)\\) to be the smallest sigma-algebra for which \\(X\\)
is measurable.

Measurability is important, because it allows one to discuss
probabilities related to random variables. Let \\(P\\) be a probability
measure on \\(\mathcal F\\). Then the equation

\\[P_X (B) = P(X^{-1} (B))\\]

describes a probability measure on \\(\mathcal B (\mathbf R)\\). For
brevity, we write expressions like \\(P(X < 0)\\) to mean
\\(P_X((-\infty, 0])\\).

[demorg]: https://en.wikipedia.org/wiki/De_Morgan%27s_laws
