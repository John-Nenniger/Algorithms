
# def coinflips(n, times = 0)
#     return times if n < 2
#     coinflips(n/2, times + 1)
# end

def coinflips(n)
    Math.log(n, 2)
end


p coinflips(8) # 10 -> 5 -> 2 -> 1