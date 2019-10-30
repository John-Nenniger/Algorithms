
# Good morning! Here's your coding interview problem for today.

# This problem was asked by Google.

# The power set of a set is the set of all its subsets. 
# Write a function that, given a set, generates its power set.

# For example, given the set {1, 2, 3}, 

# it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
# 8 combinations = 2**3 
# [1,2,3,4] \/
# {{}, {1}, {2}, {3}, {4}, {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4}, {1, 2, 3}, {1, 2, 4}, {1, 3, 4}, {2, 3, 4}, {1, 2, 3, 4}}
# 2**4 == 16

def subsets(set):
    subsets = [[]]
    set_length = len(set)
    print(set_length)
    for x in set:
        subsets.append([x])
        for y in range(x + 1, set_length):
            subsets.append([x, y])
            for z in range(y + 1, set_length):
                print(x,y,z)
                subsets.append([x,y,z])

    return subsets


# let's try again, this time from a different angle
# I'm going to write a while loop which will only 
def subsets(set):
    subsets = [[]]
    set_length = len(set)
    total = 2**set_length
    i = 0
    while len(subsets) < set_length + 1:
        set.append([set[i]])
        i = i + 1

    i = 0
    j = 1
    while len(subsets) < (set_length + 1) + set_length + 2:
        set.append([set[i], set[j]])
    
    
    
    
    return subsets




        # for i in range(x, set_length):
        #     subsets.append([x, set[i]])
        #     subsets.append([x, set[i + 1], set[i + 2]])




print(subsets([1,2,3,4]))

# test_arr = [6,7,8,9,10]

# print(test_arr)




# it's recursive :/ gotta do something with recursion.  I'll try again later.