#! /usr/bin/python
'''
logtable.py
Copyright 2017 @ Michael Kovarik

Prints out a table of logarithms (in Emacs's grid.el format).
Requires the 'tabulate' module from PyPI.
'''

from tabulate import tabulate
from math     import log10
logtable = [[log10(1 + 0.1*x + 0.01*y) 
             for y in range(10)]
            for x in range(90)]
table =[['*{:.1f}*'.format(1 + 0.1 * i)] + row
        for i, row in enumerate(logtable)]
header = [" "] + ["*{:.2f}*".format(0.01 * y) for y in range(10)]
print(tabulate(table,
               tablefmt="grid",
               floatfmt=".4f", 
               headers = header))
