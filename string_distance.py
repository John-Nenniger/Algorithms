
# Good morning! Here's your coding interview problem for today.

# This problem was asked by Google.

# The edit distance between two strings refers to the
# minimum number of character insertions, deletions, and substitutions
# required to change one string to the other. For example,
# the edit distance between “kitten” and “sitting” is 
# three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

# Given two strings, compute the edit distance between them.


def string_distance(string_one, string_two):
    change_count = 0
    returnable = []
    string_one_length = string_one.length()
    string_one_characters = string_one.split("")
    string_two_length = string_two.length()
    string_two_characters = string_two.split("")
    largest_length = string_one_length if string_one_length > string_two_length else string_two_length
    for x in range(largest_length):
        if (string_one_characters[x] != string_two_characters[x]):
           returnable.append(string_one_characters[x])
           count += 1
        else:
            returnable.append(string_one_characters[x])

    return returnable.join("")


print(string_distance('kitten', 'sitting'))
print(string_distance('blorg', 'blog'))
print(string_distance('smoking', 'thinking'))