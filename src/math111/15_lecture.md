# July 27

### Independence

Recall the definition of the independence of events. Let \\(A\\) and
\\(B\\) be events. These events are **independent** if the probability
of *both* of these events occuring can be calculated by multiplying
the probabilities of *each* of these events occuring:

\\[P(A \text{ and } B) = P(A) P(B).\\]

Note that this is a theoretical definition of independence. In many
cases, we can assume to events are independent if we have reason to
believe that knowing that one event occured doesn't effect the
probability that the other event occued. For example, we expect that
obtaining a heads after flipping a coin is independent of the event
of obtaining another heads if said coin were flipped again.

The concept of independece may be extended to categorical random
variables. Let \\(X\\) and \\(Y\\) be categorical random variables
(that is, they take a finite number of values). Then these variables
are independent if the event that \\(X=x\\) is independent of the event
that \\(Y=y\\) for *all* possible values \\(x\\) of \\(X\\) and possible
values \\(y\\) of \\(Y\\):

\\[P(X=x \text{ and } Y=y) = P(X = x)P(Y = y).\\]

The notion of independence may be further extended to random variables
taking an infinity of possible values ("numerical random variables").
However, defining independence in this case requires some sophisticated
mathematics.

### Tests for independence

Suppose we wish to test the independence of two categorical random
variables. The observations must be paired. That is, an observations
of one random variable have a one-to-one correspondence with the
observations in the other random variable.

The results of all these observations are stored in a **contingency
table** (also called a *two-way frequency table*). For example, suppose
I were to roll two four-sided dice (a "d4" in roleplaying terminology)
simultaneously flip a coin and report the results. Repeating this
experiment 400 times, I got the following numbers:

<table>
  <tr>
    <td>Observed freq.</td>
    <td>Heads</td>
    <td>Tails</td>
    <td>Total</td>
  </tr>
  <tr>
    <td>1</td>
    <td>54</td>
    <td>68</td>
    <td>122</td>
  </tr>
  <tr>
    <td>2</td>
    <td>44</td>
    <td>42</td>
    <td>86</td>
  </tr>
  <tr>
    <td>3</td>
    <td>41</td>
    <td>38</td>
    <td>79</td>
  </tr>
  <tr>
    <td>4</td>
    <td>57</td>
    <td>56</td>
    <td>113</td>
  </tr>
  <tr>
    <td>Total</td>
    <td>196</td>
    <td>204</td>
    <td>400</td>
  </tr>
</table>

If both the coin flip and roll of the die were independent, one would
expect the probabilities of each of the eight outcomes (1H, 1T, 2H, 2T,
etc.) to be \\(\frac{1}{4} \times \frac{1}{2} = \frac{1}{8}\\). And thus
the expected frequency for each of the five cells to be 400 / 8 = 50.

This calculation assumes that the die and the coin are fair (equiprobable
outcomes). This is not generally the case. In fact, the distributions of
both random variables is typically not known *a priori*. This means that
the following formula is used to calculate the expected frequency.

\\[E = \frac{R \cdot C}{n}. \\]

Here, \\(R\\) is the *row total*, \\(C\\) is the *column total*, and
\\(n\\) is the total number of paired observations. For example, the
expected frequency of rolling a 3 and a heads is

\\[\begin{aligned}
E &= \frac{79 \cdot 196}{400} \\\\
&= 38.7100.
\end{aligned}\\]

This is, of course, quite different from 50. The expected frequencies
for all possible outcomes are tabulated below:


<table>
  <tr>
    <td>Expected freq.</td>
    <td>Heads</td>
    <td>Tails</td>
  </tr>
  <tr>
    <td>1</td>
    <td>59.78</td>
    <td>62.22</td>
  </tr>
  <tr>
    <td>2</td>
    <td>42.14</td>
    <td>43.86</td>
  </tr>
  <tr>
    <td>3</td>
    <td>38.71</td>
    <td>40.29</td>
  </tr>
  <tr>
    <td>4</td>
    <td>55.37</td>
    <td>28.56</td>
  </tr>
</table>

These are the expected frequencies. If the two random variables were
independent, we would assume that the expected frequencies to be
close to the observed frequency. Formally, we would set up a hypothesis
test.

The null hypothesis would be that the two categorical random variables
are independent. The alternative hypothesis would be that the two
random variables are not independent.

The test statisic is a \\(\chi^2\\) statistic and is given by the exact
same formula as the formula for the goodness-of-fit test:

\\[\begin{aligned}
\chi^2 &= \sum \frac{(O-E)^2}{E} \\\\
&= 1.6165.
\end{aligned}\\]

This sum is carried out for each cell. The difference is the calculation
of degrees of freedom. Let \\(r\\) be the number of rows and \\(c\\) be
the number of columns. Then the total number of degrees of freedom is:

\\[\begin{aligned}
df &= (r-1)(c-1) \\\\
&= (4-1)(2-1) \\\\
&= 3.
\end{aligned}\\]

The corresponding p-value is then calculated as 65.57%. This is very large,
so we fail to reject the hypothesis that the two random variables are
independent. This should make sense since the data was actually generated
by R's random number generator, which is of very high quality.

Suppose in an independence test, the null hypothesis were rejected. This
would indicate that the random variables in question have some sort of
dependency. It is tempting to assume that they have some sort of
*causal relationship*. Avoid giving in to these temptations unless you have
strong evidence. *Correlation does not imply causation!*

### Homework (Due July 31)

1. (Review) Refer to the contingency table consisting of coin flips and
   dice rolls.
    - Calculate the p-value associated with the null hypothesis that the
      coin is fair verses the alternative hypothesis that the coin is
      unfair. Use a z-test for inference of one proportion.
    - Calculate the p-value associated with the hypothesis that the die
      is fair verses the alternative hypothesis that the die is unfair.
      Use a \\(\chi^2\\) goodness-of-fit test.
2. Do exercise 6.47 of *OpenIntro Statistics*. 
3. Read sections 7.1 and 7.2 of *OpenIntro Statistics* or chapter 14 of
   *Introductory Statistics*