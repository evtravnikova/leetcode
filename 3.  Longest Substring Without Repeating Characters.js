
var lengthOfLongestSubstring = function (s) {
    let len = 0;

    for (let m = 0; m < s.length; m++) {
        let size = getFirstUniqueSubstring(s, m);
        if (size > len) {
            len = size
        }
    }
    return len
}

lengthOfLongestSubstring('ajablnpqtsilqbljykcktbvfnicuxqmrfwfdbpbsedkxknyyydpsdwvnbqhoqltbppqfbxicqwbweirqngjdskjegobwxxwbcgzvwcasxotbmpqqxsxkgvnfpjismipxfstwpskerhgrpovalovjyqgueybikudugmihvkjdsxevbqncwyhzfaamrcntiakutqnaiknvnebnrwoxpeakcpezxetwvicdavzzgjgmiewlgterxhjbwmezeajenfnnioqlmjfnvkbhdedbuxdduxhflsllyqcmafcfclqgukajablnpqtsilqbljykcktbvfnicuxqmrfwfdbpbsedkxknyyydpsdwvnbqhoqltbppqfbxicqwbweirqngjdskjegobwxxwbcgzvwcasxotbmpqqxsxkgvnfpjismipxfstwpskerhgrpovalovjyqgueybikudugmihvkjdsxevbqncwyhzfaamrcntiakutqnaiknvnebnrwoxpeakcpezxetwvicdavzzgjgmiewlgterxhjbwmezeajenfnnioqlmjfnvkbhdedbuxdduxhflsllyqcmafcfclqguk')


function getFirstUniqueSubstring(s, m) {
    let mySet = new Set;

    for (let i = m; i < s.length; i++) {
        if (!mySet.has(s[i])) {
            mySet.add(s[i])
        } else {
            return mySet.size
        }
    }
    return mySet.size
}

