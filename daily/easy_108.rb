# Given two strings A and B, return whether or not A can be shifted some number of times to get B.

# For example, if A is abcde and B is cdeab, return true. 
# If A is abc and B is acb, return false.

# Pretty sure I created this as an algorithm for students... oh well, will only take a minute anyway, it's easy.

def canBeRotated? a, b
    x = 0
    while x < a.length
        a = a.split("").rotate().join("")
        if a == b
            return true
        end
        x += 1
    end
    return false
end



p canBeRotated?("abcdef", "cdefab")
p canBeRotated?("abc", "cba")