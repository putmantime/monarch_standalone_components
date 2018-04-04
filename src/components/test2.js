const responseHeader = {
  'status': 0,
  'QTime': 46,
  'params': {
    'qt': 'standard',
    'json.nl': 'arrarr',
    'indent': 'on',
    'facet.pivot': '{!stats=piv1}subject_category,subject',
    'f.subject.facet.limit': '0',
    'fl': '*,score',
    'start': '0',
    'fq': 'object_closure:\"MONDO:0007947\"',
    'rows': '0',
    'facet.limit': '20',
    'q': '*:*',
    'defType': 'edismax',
    'stats': 'true',
    'facet.method': 'enum',
    'facet.mincount': '1',
    'wt': 'json',
    'facet': 'true',
    'stats.field': '{!tag=piv1 calcdistinct=true distinctValues=false}subject'
  }
}
