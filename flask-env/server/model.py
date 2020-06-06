from pyresparser import ResumeParser

data = ResumeParser('Mohamed_Amr_CV_April.pdf').get_extracted_data()

print(data)
