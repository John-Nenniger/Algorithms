
# given a word and a string, find all starting indicies
# of the string that are anagrams of the word



def anagrams word, string
    # ok well the length of the word helps me here a lot
    indicies = []
    word_length = word.length
    string_length = string.length
    sorted_word = word.chars.sort.join
    string.slice(0, word_length)
    (0..string_length).each do |index|
        chunk = string.slice(index, word_length)
        if chunk.length == word_length
            indicies.push(index) if chunk.chars.sort.join == sorted_word
        end
    end

    indicies
end
