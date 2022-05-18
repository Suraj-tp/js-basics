num=7

out=[ True if num%i==0 else False for i in range(2,num) ]

print("not prime" if True in out else "prime")

