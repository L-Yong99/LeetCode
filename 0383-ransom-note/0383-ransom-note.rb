# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
# best possible answer
# uniq is used to run each char once only 
def can_construct(ransom_note, magazine)
  ransom_note.chars.uniq.all? { |character| ransom_note.count(character) <= magazine.count(character) }
end