#!/usr/bin/env python
# coding: utf-8

# In[ ]:


def digit2text(inp):
    '''
        Function convert number from digit to text format with high accuracy
    '''
    number_list = ["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín","mười","lăm"]

    # To process small unit
    def read_unit(digit,flag=False):
        if digit == 0:
            return ""
        elif digit>=20:
            num = int(digit/10)
            remainder = digit % 10
            if remainder == 0:
                return number_list[num] + " mươi"
            elif remainder == 1:
                return number_list[num] + " mươi mốt"
            else:
                if remainder == 5:
                    return number_list[num] + " mươi " + number_list[11]
                return number_list[num] + " mươi " + number_list[remainder]
        elif digit>10:
            if digit % 10 == 5:
                return "mười " + number_list[11]
            return "mười " + number_list[digit % 10]
        else:
            if flag == True:
                if digit > 0:
                    return "lẻ " + number_list[digit]
                return ""
            return number_list[digit]
    # To process large unit recursively   
    def digit2text_(digit,flag=None):
        if digit < 1000:
            if digit<100:
                if flag == None or digit == 0:
                    return read_unit(digit)
                if digit < 10:
                    return read_unit(digit,True)
            num = int(digit / 100)
            remainder = digit % 100
            flag = num if flag == -1 else flag
            odd = True if int((remainder / 10) %10)==0 else False
            if digit == 100:
                return "một trăm"
            return number_list[num] + " trăm " + read_unit(remainder,odd) 
        if digit / 1000000000 >= 1:
            num = digit / 1000000000
            remainder = digit % 1000000000
            return (digit2text_(int(num),flag) + " tỷ " + digit2text_(remainder,int((num* 10) % 10))).strip()
        elif digit / 1000000 >= 1:
            num = digit / 1000000
            remainder = digit % 1000000
            flag = digit if flag == -1 else flag
            return (digit2text_(int(num),flag) + " triệu " + digit2text_(remainder,int((num* 10) % 10))).strip()
        elif digit / 1000 >= 1:
            num = digit / 1000
            remainder = digit % 1000
            flag = num if flag == -1 else flag
            return (digit2text_(int(num),flag) + " nghìn " + digit2text_(remainder,int((num* 10) % 10))).strip()
    # return result
    return digit2text_(inp)
    

