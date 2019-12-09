
# Good morning! Here's your coding interview problem for today.

# This problem was recently asked by Google.

# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.



def adds_up?(array, k)
    array_length = array.length
    for i in 0..array_length
        y = i + 1
        while y < array_length
            if (array[i] + array[y] == k)
                return true
            end
            y = y + 1
        end
    end
    false
end


puts adds_up?([10, 15, 3, 7], 17)


puts adds_up?([1, 2, 3, 21], 24)


# Bonus: Can you do this in one pass?

# hmmm, don't really know how to do this.  maybe I sort it first? That seems like cheating
