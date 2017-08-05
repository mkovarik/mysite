<TeXmacs|1.99.4>

<style|generic>

<\body>
  <section*|Test II Review>

  <subsection*|Open Ended Questions>

  <paragraph*|Problem 1>

  List the assumptions for the following hypothesis tests. Then write the
  equation defining the corresponding test statistic and degrees of freedom
  (if applicable):

  <\itemize-dot>
    <\with|par-columns|2>
      <item>One-proportion <math|z>-test.

      <item>Two-proportions <math|z>-test.

      <item><math|\<chi\><rsup|2>>-test for goodness of fit

      <item><math|\<chi\><rsup|2>>-test for independence

      <item>Regression <math|t>-test

      <item>Correlation <math|t>-test
    </with>
  </itemize-dot>

  <subsubsection*|Problem 2>

  Describe the the following concepts in the context of linear least squares
  regression. Don't just give formulas. Also give intuitive explanations

  <\with|par-columns|2>
    <\itemize-dot>
      <item>Least squares criterion.

      <item>Extrapolation.

      <item>Correlation

      <item>SST, SSR, SSE and <math|r<rsup|2>>.

      <item>The four conditions for performing inference with linear least
      squares regression.
    </itemize-dot>
  </with>

  <new-page*>

  <subsection*|Math Problems>

  For the following problems, indicate the degrees of freedom along with your
  test statistic and p-value (if applicable).

  <paragraph*|Problem 3>

  A coin was tossed and an eight-sided die (a \Pd8\Q) was cast 80 times each.
  The coin and the die may be biased. The frequency tables are as follows:

  <\with|par-mode|center>
    <block*|<tformat|<cwith|1|1|2|2|cell-row-span|1>|<cwith|1|1|2|2|cell-col-span|2>|<cwith|1|1|1|1|cell-tborder|0ln>|<cwith|1|1|1|1|cell-bborder|1ln>|<cwith|2|2|1|1|cell-tborder|1ln>|<cwith|1|1|1|1|cell-lborder|0ln>|<cwith|1|1|1|1|cell-rborder|1ln>|<cwith|1|1|2|2|cell-lborder|1ln>|<cwith|1|1|2|2|cell-background|pastel
    grey>|<table|<row|<cell|>|<cell|coin>|<cell|>>|<row|<cell|result>|<cell|<strong|Heads>>|<cell|<strong|Tails>>>|<row|<cell|freq.>|<cell|54>|<cell|26>>>>>

    <block*|<tformat|<cwith|1|1|2|2|cell-row-span|1>|<cwith|1|1|2|2|cell-col-span|8>|<cwith|1|1|1|1|cell-tborder|0ln>|<cwith|1|1|1|1|cell-bborder|1ln>|<cwith|2|2|1|1|cell-tborder|1ln>|<cwith|1|1|1|1|cell-lborder|0ln>|<cwith|1|1|1|1|cell-rborder|1ln>|<cwith|1|1|2|2|cell-lborder|1ln>|<cwith|1|1|2|2|cell-background|pastel
    grey>|<table|<row|<cell|>|<cell|d8>|<cell|>|<cell|>|<cell|>|<cell|>|<cell|>|<cell|>|<cell|>>|<row|<cell|result>|<cell|<strong|1><strong|>>|<cell|<strong|2>>|<cell|<strong|3>>|<cell|<strong|4>>|<cell|<strong|5>>|<cell|<strong|6>>|<cell|<strong|7>>|<cell|<strong|8>>>|<row|<cell|freq.>|<cell|9>|<cell|8>|<cell|12>|<cell|8>|<cell|15>|<cell|6>|<cell|13>|<cell|9>>>>>
  </with>

  <\enumerate-alpha>
    <item>Use a one-proportion <math|z>-test to test the hypothesis that the
    coin is biased at the 10% sig. level. Assume that the conditions for
    performing such a test are satisfied. (<em|Ans.> <math|z=\<pm\>3.13>,
    <math|p-value>=0.001745, reject).

    <item>Use a <math|\<chi\><rsup|2>> goodness-of-fit test to check the
    hypothesis that the die is biased at the 10% sig. level. Assume that the
    conditions for performing such a test are satisfied. (<em|Ans.>
    <math|\<chi\><rsup|2>=6.4> (df=7), <math|p-value=0.4939>, fail to
    reject).

    <item>Redo part a) with a <math|\<chi\><rsup|2>> goodness-of-fit test.
    (<em|Ans.> <math|\<chi\><rsup|2>=9.8> (df=1), same <math|p>-value. Note
    that <math|<around*|(|\<pm\>3.13|)><rsup|2>=9.8>)
  </enumerate-alpha>

  <subsubsection*|Problem 4>

  A study was conducting among PC gamers to determine if there is a
  relationship between the operating system (Linux, Windows) that they use
  and the brand of the GPU (AMD, Intel, Nvidia) that they use. The frequency
  table is as follows:

  <\with|par-mode|center>
    <block*|<tformat|<cwith|3|3|1|1|cell-row-span|3>|<cwith|3|3|1|1|cell-col-span|1>|<cwith|3|3|1|1|cell-hyphen|n>|<cwith|3|3|1|1|cell-valign|c>|<cwith|1|1|1|1|cell-tborder|0ln>|<cwith|1|1|1|1|cell-lborder|0ln>|<cwith|2|2|1|1|cell-tborder|0ln>|<cwith|1|1|1|1|cell-bborder|0ln>|<cwith|2|2|1|1|cell-bborder|1ln>|<cwith|3|5|1|3|cell-tborder|1ln>|<cwith|2|2|1|1|cell-lborder|0ln>|<cwith|2|2|1|1|cell-rborder|0ln>|<cwith|2|2|2|2|cell-lborder|0ln>|<cwith|1|1|2|2|cell-tborder|0ln>|<cwith|1|1|2|2|cell-bborder|0ln>|<cwith|2|2|2|2|cell-tborder|0ln>|<cwith|1|1|2|2|cell-lborder|0ln>|<cwith|1|1|1|1|cell-rborder|0ln>|<cwith|1|1|2|2|cell-rborder|1ln>|<cwith|1|1|3|3|cell-row-span|1>|<cwith|1|1|3|3|cell-col-span|2>|<cwith|3|3|1|1|cell-background|light
    grey>|<cwith|1|1|3|3|cell-background|pastel
    grey>|<table|<row|<cell|>|<cell|>|<cell|Operating
    System>|<cell|>>|<row|<cell|>|<cell|>|<cell|Linux>|<cell|Windows>>|<row|<cell|GPU
    Vendor >|<cell|AMD>|<cell|38>|<cell|182>>|<row|<cell|>|<cell|Intel>|<cell|34>|<cell|108>>|<row|<cell|>|<cell|Nvidia>|<cell|95>|<cell|268>>>>>
  </with>

  <\enumerate-alpha>
    <item>Conduct a <math|\<chi\><rsup|2>> independence test to determine if
    there is any relationship between the type of operating system and the
    type of GPU used by PC gamers at the 10% significance level. Assume that
    the conditions for conducting such a test holds. (<em|Ans.>
    <math|\<chi\><rsup|2>=6.20> (df=2), <math|p>-value=0.04505, reject the
    null)

    <item>It is widely perceived that AMD GPU's traditionally perform worse
    on Linux than on Windows. Conduct a two-proportion <math|z>-test to
    determine if AMD GPU's are less popular with Linux users than with
    Windows users at the 10% significance level. Assume that the conditions
    for conducting such a test holds. (<em|Ans.> <math|z=\<pm\>2.43>,
    <math|p>-value=.0075, reject the null)

    <item>What problems might arise with testing multiple hypotheses with one
    dataset?
  </enumerate-alpha>

  <new-page*>

  <paragraph*|Problem 5>

  The following data contains paired observations of two numerical random
  variables <math|x> and <math|y>.

  <\with|par-mode|center>
    <block*|<tformat|<cwith|1|-1|1|1|cell-background|light
    grey>|<table|<row|<cell|<math|x>>|<cell|32>|<cell|28>|<cell|18>|<cell|25>|<cell|36>>|<row|<cell|<math|y>>|<cell|27>|<cell|35>|<cell|23>|<cell|44>|<cell|30>>>>>
  </with>

  <\enumerate-alpha>
    <item>Calculate <math|S<rsub|x x>>, <math|S<rsub|x y>>, and
    <math|S<rsub|y y>>. (<em|Ans.> <math|S<rsub|x x>=118.8>, <math|S<rsub|x
    y>=17.8>, <math|S<rsub|y y>=262.8>)

    <item>Calculate the coefficients <math|b<rsub|0>> and <math|b<rsub|1>>
    for the linear least-squares regression
    <math|<wide|y|^>=b<rsub|0>+b<rsub|1>x> as well as the corresponding value
    for <math|r<rsup|2>>. (<em|Ans.> <math|r<rsup|2>>=0.00639,
    <math|b<rsub|0>=29.18>, <math|b<rsub|1>=0.09428>)

    <item>Assume the conditions for performing inference for linear
    regression. Conduct a regression <math|t>-test to test the hypothesis
    that <math|\<beta\><rsub|1>\<neq\>0> against the null hypothesis that
    <math|\<beta\><rsub|1>=0> (<em|Ans.> <math|t=0.139>,
    <math|p>-value=.8983, fail to reject the nul).

    <item>Conduct a correlation <math|t>-test to test the hypothesis that
    <math|\<rho\>\<neq\>0> against the null hypothesis <math|\<rho\>=0>
    (<em|Ans.> <math|t=0.139>, <math|p-value=89.83>%, fail to reject the
    null).

    <item>Can this linear regression be used to predict the value of <math|y>
    from the value of <math|x>?
  </enumerate-alpha>

  <paragraph*|Problem 6>

  Summary statistics for paired observations of two numerical random
  variables <math|x> and <math|y> are given below:

  <\with|par-mode|center>
    <block*|<tformat|<cwith|5|5|2|2|cell-row-span|1>|<cwith|5|5|2|2|cell-col-span|2>|<cwith|1|1|1|1|cell-tborder|0ln>|<cwith|1|1|1|1|cell-bborder|1ln>|<cwith|2|2|1|1|cell-tborder|1ln>|<cwith|1|1|1|1|cell-lborder|0ln>|<cwith|1|1|1|1|cell-rborder|1ln>|<cwith|1|1|2|2|cell-lborder|1ln>|<cwith|1|1|2|-1|cell-background|pastel
    grey>|<cwith|2|-1|1|1|cell-background|pastel
    grey>|<table|<row|<cell|>|<cell|<math|x>>|<cell|<math|y>>>|<row|<cell|sample
    size>|<cell|40>|<cell|40>>|<row|<cell|mean>|<cell|120>|<cell|200>>|<row|<cell|stdev>|<cell|32>|<cell|50>>|<row|<cell|correlation>|<cell|0.85>|<cell|>>>>>
  </with>

  (<with|font-series|bold|Note:> you may have to use the formulas
  <math|S<rsub|x x>=<around*|(|n-1|)>s<rsub|x><rsup|2>> and <math|S<rsub|y
  y>=<around*|(|n-1|)>s<rsub|y><rsup|2>> as discussed in class)

  <\enumerate-alpha>
    <item>Write the sample linear regression
    <math|<wide|y|^>=b<rsub|0>+b<rsub|1>x> satisfying the least-squares
    criterion and the corresponding value for <math|r<rsup|2>>. (<em|Ans.>
    <math|<wide|y|^>=40.63+1.328x>, <math|r<rsup|2>=0.7225>)

    <item>Use the above regression to extrapolate a predicted value for
    <math|y> given the particular value for the predictor variable
    <math|x<rsub|P>=105>. And provide a 90% prediction interval for this
    value. Assume that the conditions for performing such a hypothesis test
    are satisfied. (<em|Ans.> <math|180.08\<pm\>45.67>)

    <item>What is the least-squares criterion?

    <item>In doing part <math|b>, you may have calculated that
    <math|s<rsub|e>=26.68>. As discussed in class, this is an estimator of
    the population standard deviation of <math|y> conditioned on <math|x>.
    But this is much lower than the sample standard deviation of <math|y>,
    which is <math|s<rsub|y>=50>. Why are they so different? Shouldn't they
    be the same?
  </enumerate-alpha>
</body>

<\initial>
  <\collection>
    <associate|page-type|letter>
  </collection>
</initial>

<\references>
  <\collection>
    <associate|auto-1|<tuple|?|1>>
    <associate|auto-2|<tuple|?|1>>
    <associate|auto-3|<tuple|?|1>>
    <associate|auto-4|<tuple|<with|mode|<quote|math>|\<bullet\>>|1>>
    <associate|auto-5|<tuple|<with|mode|<quote|math>|\<bullet\>>|2>>
    <associate|auto-6|<tuple|<with|mode|<quote|math>|\<bullet\>>|2>>
    <associate|auto-7|<tuple|c|2>>
    <associate|auto-8|<tuple|c|3>>
    <associate|auto-9|<tuple|e|3>>
  </collection>
</references>

<\auxiliary>
  <\collection>
    <\associate|toc>
      <vspace*|1fn><with|font-series|<quote|bold>|math-font-series|<quote|bold>|Test
      II Review> <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-1><vspace|0.5fn>

      <with|par-left|<quote|1tab>|Open Ended Questions
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-2>>

      <with|par-left|<quote|4tab>|Problem 1
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-3><vspace|0.15fn>>

      <with|par-left|<quote|2tab>|Problem 2
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-4>>

      <with|par-left|<quote|1tab>|Math Problems
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-5>>

      <with|par-left|<quote|4tab>|Problem 3
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-6><vspace|0.15fn>>

      <with|par-left|<quote|2tab>|Problem 4
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-7>>

      <with|par-left|<quote|4tab>|Problem 5
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-8><vspace|0.15fn>>

      <with|par-left|<quote|4tab>|Problem 6
      <datoms|<macro|x|<repeat|<arg|x>|<with|font-series|medium|<with|font-size|1|<space|0.2fn>.<space|0.2fn>>>>>|<htab|5mm>>
      <no-break><pageref|auto-9><vspace|0.15fn>>
    </associate>
  </collection>
</auxiliary>